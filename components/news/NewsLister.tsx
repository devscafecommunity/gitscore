import { background, Grid, GridItem } from "@chakra-ui/react";

import { useEffect, useState } from "react";

// Import cookies
import { useCookies } from "react-cookie";

import { Text, Heading } from "@chakra-ui/react";

import Link from "next/link";

import "@fontsource/jetbrains-mono";

/*
// POST: /api/news/getpreferences   
/*

If user has preferences, the user will send some data to the server, and the server will return the news based on the user preferences.
Else the user will just get the news based on the default preferences.
{
    "origins": [
        {
            "name": "Play Dev",
            "times_visited": 1
        },
        {
            "name": "TabNews",
            "times_visited": 0
        },
        {
            "name": "Dev.to",
            "times_visited": 0
        }
    ],
    "keywords_recurrence": [
        "Progressive Web Apps (PWA)",
        "Você",
        "conhece",
        "as",
        "GoLang"
    ]
}
*/

// ssr
// export const getServerSideProps: GetServerSideProps = async (context) => {

// }

// interface Preferences {
//   origins: {
//     name: string;
//     times_visited: number;
//   }[];
//   keywords_recurrence: string[];
// }

interface News {
  name: string;
  partner: boolean;
  items: {
    title: string;
    link: string;
    description: string;
    date: string;
    tags: string[];
    score?: number; // Add score property
  }[];
}

export default function NewsLister() {
  const [cookies, setCookie] = useCookies(["preferences", "consent"]); // If consent is false, the user can't use preferences
  // Preferences exists? user has consent? if not, and user has consent, create a new one
  if (cookies.preferences === undefined && cookies.consent === true) {
    setCookie("preferences", {
      origins: [],
      keywords_recurrence: [],
    });
  }

  // const [preferences, setPreferences] = useState<Preferences | undefined>(
  //   undefined
  // );
  const [news, setNews] = useState<News[] | undefined>(undefined);

  // Get news whitout preferences: http://localhost:3000/api/news/getnopreferences
  // Get news with preferences: http://localhost:3000/api/news/getpreferences POST associated

  useEffect(() => {
    if (cookies.preferences === undefined) {
      fetch("/api/news/getnopreferences")
        .then((res) => res.json())
        .then((data) => {
          setNews(data);
        });
    } else {
      console.log(JSON.stringify(cookies.preferences, null, 2));
      fetch("/api/news/getpreferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cookies.preferences),
      })
        .then((res) => res.json())
        .then((data) => {
          setNews(data);
        });
    }
  }, [ cookies.preferences ]);

  // function setPreferenceOrigin(origin: string, times_visited: number) {
  //   let preferences = cookies.preferences;
  //   if (preferences === undefined) {
  //     preferences = {
  //       origins: [],
  //       keywords_recurrence: [],
  //     };
  //     setCookie("preferences", preferences);
  //   } else {
  //     preferences.origins.push({
  //       name: origin,
  //       times_visited: times_visited,
  //     });
  //     setCookie("preferences", preferences);
  //   }
  // }

  function incrementPreferenceOrigin(origin: string) {
    let preferences = cookies.preferences;
    if (preferences === undefined) {
      preferences = {
        origins: [],
        keywords_recurrence: [],
      };
      setCookie("preferences", preferences);
    } else {
      const index = preferences.origins.findIndex(
        (o: { name: string; times_visited: number }) => o.name === origin
      );
      if (index === -1) {
        preferences.origins.push({
          name: origin,
          times_visited: 1,
        });
      } else {
        preferences.origins[index].times_visited += 1;
      }
      setCookie("preferences", preferences);
    }
  }

  // function setPreferenceKeywords(keywords: string[]) {
  //   let preferences = cookies.preferences;
  //   if (preferences === undefined) {
  //     preferences = {
  //       origins: [],
  //       keywords_recurrence: [],
  //     };
  //     setCookie("preferences", preferences);
  //   } else {
  //     preferences.keywords_recurrence = keywords;
  //     setCookie("preferences", preferences);
  //   }
  // }

  function appendPreferenceKeywords(keywords: string[]) {
    let preferences = cookies.preferences;
    if (preferences === undefined) {
      preferences = {
        origins: [],
        keywords_recurrence: [],
      };
      setCookie("preferences", preferences);
    } else {
      preferences.keywords_recurrence =
        preferences.keywords_recurrence.concat(keywords);
      setCookie("preferences", preferences);
    }
  }
  /*
    [
  {
    "name": "Play Dev",
    "partner": true,
    "items": [
      {
        "title": "Progressive Web Apps (PWA)",
        "link": "https://playdevhub.vercel.app/posts/pwa/",
        "description": "Você conhece as aplicações progressivas?",
        "date": "2024-08-22T21:00:00.000Z",
        "tags": [
          "Progressive Web Apps (PWA)",
          "https://playdevhub.vercel.app/posts/pwa/",
          "Você",
          "conhece",
          "as",
          "aplicações",
          "progressivas?",
          "22",
          "2024",
          "Progressive",
          "Web",
          "Apps",
          "(PWA)",
          "Thu,",
          "Aug",
          "21:00:00",
          "GMT",
          "2024-08-22T21:00:00.000Z"
        ]
      },
    */

  function getSideNews(news: News[]) {
    let raw = news.filter((n) => n.items.length <= 15);
    const data = news.filter((n) => n.items.length > 15);
    if (data.length === 1) {
      raw = raw.filter((n) => n.partner === false);
    }
    return raw;
  }

  function getCenterNews(news: News[]) {
    const data = news.filter((n) => n.items.length > 15);
    if (data.length === 1) {
      data.push(...news.filter((n) => n.partner === true));
    }
    return data;
  }
  function rankingNews(news: News[]): News[] {
    /*
    Score news based on the user preferences, date of the news, and the number of times the user has visited the origin.
    */ 
    const preferences = cookies.preferences;
    if (preferences === undefined) {
      return news;
    }
    const origins = preferences.origins;
    const keywords = preferences.keywords_recurrence;
    return news.map((n) => {
      n.items.forEach((i) => {
        let score = 0;
        if (i.tags) {
          i.tags.forEach((t) => {
            if (keywords.includes(t)) {
              score += 1;
            }
          });
        }
        const origin = origins.find((o: { name: string; times_visited: number }) => o.name === n.name);
        if (origin) {
          score += origin.times_visited;
        }
        const date = new Date(i.date);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        score += diffDays;
        i.score = score;
      });
      n.items.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
      return n;
    });
  }
  
  function handleClick(item: News, origin: string) {
    incrementPreferenceOrigin(origin);
    appendPreferenceKeywords(item.items[0].tags);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Grid
        h="250px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        className="text-white"
      >
        <GridItem rowSpan={2} colSpan={1}>
          {news &&
            rankingNews(getSideNews(news)).map((n, index) => (
              <div key={index} className="px-2 pb-4">
                <div className="flex flex-col gap-4 justify-center p-2 bg-slate-500 rounded-md mb-2 mt-2">
                  <Heading fontFamily="JetBrains Mono" className="text-lg text-center">
                    {n.name}
                  </Heading>
                </div>
                  <div className="flex flex-col gap-4 justify-center p-2 rounded-sm mb-2 mt-2">
                  {n.items.map((i, index) => (
                    <div className="flex flex-col gap-4 justify-center p-2 hover:bg-slate-500 transition duration-200 ease-in-out rounded-lg" key={index}>
                      <Link href={i.link} target="_blank" passHref onClick={() => handleClick(
                        n,
                        n.name
                      )}>
                        <Text style={{ cursor: "pointer" }} fontFamily="JetBrains Mono" className="text-sm">
                          {i.title}
                        </Text>
                      </Link>
                    </div>                        
                  ))}
                  </div>
              </div>
            ))}
        </GridItem>
        <GridItem colSpan={4}>
          {news &&
            rankingNews(getCenterNews(news)).map((n, index) => (
              <div key={index} className="px-2">
                {/* <Heading  fontFamily="JetBrains Mono">{n.name}</Heading  fontFamily="JetBrains Mono"> */}
                <div className="flex flex-col gap-4 justify-center p-2 bg-slate-500 rounded-md mb-2 mt-2">
                  <Heading fontFamily="JetBrains Mono" className="text-lg text-center">
                    {n.name}
                  </Heading>
                </div>
                <div className="flex flex-col gap-4 justify-center p-2 rounded-sm mb-2 mt-2">
                  {n.items.map((i, index) => (
                    <div className="flex flex-col gap-4 justify-center p-2 hover:bg-slate-500 transition duration-200 ease-in-out rounded-lg" key={index}>
                      <Link href={i.link} target="_blank" passHref onClick={() => handleClick(
                        n,
                        n.name
                      )}>
                        <Text style={{ cursor: "pointer" }} fontFamily="JetBrains Mono" className="text-sm">
                          {i.title}
                        </Text>
                      </Link>
                    </div>                        
                  ))}
                  </div>
              </div>
            ))}
        </GridItem>
      </Grid>
    </div>
  );
}
