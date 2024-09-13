import Parser from "rss-parser";

function makeTagList(
    object: Record<string, unknown>,
    limit: number = 25,
    priority: string[] = [] // Fields that should be prioritized
) {
    const tags = [];
    const counts: { [key: string]: number } = {};
    for (const key in object) {
        if (priority.includes(key)) {
            tags.push(object[key]);
        }
        if (typeof object[key] === "string") {
            const words = object[key].split(" ");
            for (const word of words) {
                if (counts[word]) {
                    counts[word] += 1;
                } else {
                    counts[word] = 1;
                }
            }
        }
    }
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    for (const [word, count] of sorted) {
        if (tags.length < limit) {
            tags.push(word);
        } else {
            break;
        }
    }
    return tags;
}

function getItems(feedData: Parser.Output<unknown>, priority: string[] = []) {
    try {
        return feedData.items.map((item) => {
            return {
                title: item.title,
                link: item.link,
                description: item.contentSnippet,
                date: item.isoDate,
                tags: makeTagList(item as Record<string, unknown>, 25, priority),
            };
        });
    }
    catch (error) {
        return [];
    }
}

/*
Function fetch news:
const parser = new Parser();
    const feedsData = await Promise.all(
        feeds.map(async (feed) => {
            const feedData = await parser.parseURL(feed.url);
            return {
                name: feed.name,
                partner: feed.partner,
                items: getItems(feedData, feed.priority),
            };
        })
    );

const feeds = [
    {
        name: "Play Dev",
        url: "https://playdevhub.vercel.app/rss.xml",
        partner: true,
        priority: ["title", "description"],
    },
    {
        name: "TabNews",
        url: "https://www.tabnews.com.br/recentes/rss",
        partner: false,
        priority: ["title"],
    },
    {
        name: "Dev.to",
        url: "https://dev.to/rss",
        partner: false,
        priority: ["title"],
    }
];
*/

const feeds = [
    {
        name: "Play Dev",
        url: "https://playdevhub.vercel.app/rss.xml",
        partner: true,
        priority: ["title", "description"],
    },
    {
        name: "TabNews",
        url: "https://www.tabnews.com.br/recentes/rss",
        partner: false,
        priority: ["title"],
    },
    {
        name: "Dev.to",
        url: "https://dev.to/rss",
        partner: false,
        priority: ["title"],
    },
    {
        name: "The Daily WTF",
        url: "https://feeds.feedburner.com/TheDailyWtf",
        partner: false,
        priority: ["title"],
    },
    {
        name: "The Verge",
        url: "https://www.theverge.com/rss/index.xml",
        partner: false,
        priority: ["title"],
    },
    {
        name: "Better Programming",
        url: "https://medium.com/feed/better-programming",
        partner: false,
        priority: ["title"],
    }
];

function fetchData() {
    const parser = new Parser();
    return Promise.all(
        feeds.map(async (feed) => {
            const feedData = await parser.parseURL(feed.url);
            return {
                name: feed.name,
                partner: feed.partner,
                items: getItems(feedData, feed.priority),
            };
        })
    );
}

/*
fetchData() ->
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
      ...
    ]
  },
  ...
]


*/
/*
Functio to bake content to user:

user will have an cookie on the browser with the folowing data:

{
    origins: [
        {
            name: "Play Dev",
            times_visited: 1,
        },
        {
            name: "TabNews",
            times_visited: 0,
        },
        {
            name: "Dev.to",
            times_visited: 0,
        },
    ],
    keywords_recurrence: [
        "Progressive Web Apps (PWA)",
        "Você",
        "conhece",
        "as",
        ...
    ]
}
    
To bake content to the user, the user will post the cookie to the server, and the server will return the news that the user will like to see.

filtering oder:

1. Place we will prioritize the origins that the user has visited more times.
2. Place we will prioritize the keywords that the user has more recurrence.
3. Place we will prioritize the news that are from partners.
4. Still show a few news outside the user's preferences, for discovery rate.
*/

async function bakeNews(
    origins: { name: string, times_visited: number }[],
    keywords_recurrence: string[],
    discovery_rate: number = 0.5
) {
    const news = await fetchData();
    return news.sort((a, b) => {
        const aOrigin = origins.find((origin) => origin.name === a.name);
        const bOrigin = origins.find((origin) => origin.name === b.name);
        if (aOrigin && bOrigin) {
            if (aOrigin.times_visited > bOrigin.times_visited) {
                return -1;
            } else if (aOrigin.times_visited < bOrigin.times_visited) {
                return 1;
            } else {
                return 0;
            }
        }
        return 0;
    });
}

// If user has no preferences, the user will just get the news based on the default preferences.
/*
Rules:

1. Prioritize news from partners.
2. Prioritize news with the most recurrence of keywords between the news list.
3. Prioritize news more recent from the list.
*/
async function bakeNewsNoPref() {
    const news = await fetchData();
    return news.sort((a, b) => {
        if (a.partner && !b.partner) {
            return -1;
        } else if (!a.partner && b.partner) {
            return 1;
        } else {
            return 0;
        }
    });
}



export {
    fetchData,
    makeTagList,
    getItems,
    bakeNews,
    bakeNewsNoPref
}