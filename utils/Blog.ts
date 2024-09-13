
import Author from "@/pages/blog/authors/[nickname]";
import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import PostData from "@/utils/interfaces/PostData";

export const notionClient = new Client({
  auth: process.env.NOTION_SECRET,
});


/*
*/


//
export const getPages = async () => {
  return notionClient.databases.query({
    filter: {
      property: "Public",
      checkbox: {
        equals: true,
      },
    },
    database_id: process.env.POSTS_DATABASE_ID!,
  });
};

export const getTotalPostCount = async () => {
  let pages = notionClient.databases.query({
    filter: {
      property: "Public",
      checkbox: {
        equals: true,
      },
    },
    database_id: process.env.POSTS_DATABASE_ID!,
  });

  return pages.then((res) => res.results.length);
}

export const getPostBySlug = async (slug: string) => {
  return notionClient.databases.query({
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
    database_id: process.env.POSTS_DATABASE_ID!,
  });
}

export const getPostIdBySlug = async (slug: string) => {
  return notionClient.databases.query({
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
    database_id: process.env.POSTS_DATABASE_ID!,
  }).then((res) => res.results[0].id);
};

export const getPostContent = async (pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
};

export const getPostDataSimplifiedBySlug = async (slug: string) => {
  const data = notionClient.databases.query({
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
    database_id: process.env.POSTS_DATABASE_ID!,
  }) as Promise<any>;

  const page = new Promise<PostData>((resolve, reject) => {
    data.then((res) => {
      const page = res.results[0] as PageObjectResponse;
      const properties = page.properties as any;

      const cover = properties.Cover.files[0].external.url || properties.Cover.files[0].file.url;

      const simplifiedPost: PostData = {
        id: page.id,
        title: properties.Title.title[0].plain_text,
        description: properties.Description.rich_text[0].plain_text,
        cover,
        banner: properties.Banner.files[0].external.url || properties.Banner.files[0].file.url,
        slug: properties.Slug.rich_text[0].plain_text,
        tags: properties.Tags.multi_select.map((tag: any) => tag.name),
        created_time: page.created_time,
        last_edited_time: page.last_edited_time,
        author: {
          id: properties.Author.people[0].id,
          name: properties.Author.people[0].name,
          avatar: "",
          banner: "",
          email: properties.Author.people[0].person.email,
          nickname: ""
        },
        content: [],
        contentstring: "",
      };
        

      resolve(simplifiedPost);
    });
  });

  return page;
};

export const getPostDataSimplified = async () => {
  const data = notionClient.databases.query({
    filter: {
      property: "Public",
      checkbox: {
        equals: true,
      },
    },
    database_id: process.env.POSTS_DATABASE_ID!,
  }) as Promise<any>;

  const simplifiedPost = new Promise<PostData[]>((resolve, reject) => {
    data.then((res) => {
      console.log(res.results);
      const pages = res.results as PageObjectResponse[];

      const simplifiedPosts = pages.map((page) => {
        const properties = page.properties as any;

        const cover = properties.Cover.files[0].external.url || properties.Cover.files[0].file.url;

        const simplifiedPost: PostData = {
          id: page.id,
          title: properties.Title.title[0].plain_text,
          description: properties.Description.rich_text[0].plain_text,
          cover,
          banner: properties.Banner.files[0].external.url || properties.Banner.files[0].file.url,
          slug: properties.Slug.rich_text[0].plain_text,
          tags: properties.Tags.multi_select.map((tag: any) => tag.name),
          created_time: page.created_time,
          last_edited_time: page.last_edited_time,
          author: {
            id: properties.Author.people[0].id,
            name: properties.Author.people[0].name,
            avatar: "",
            banner: "",
            email: properties.Author.people[0].person.email,
            nickname: ""
          },
          content: [],
          contentstring: "",
        };

        return simplifiedPost;
      });

      resolve(simplifiedPosts);
    });
  });

  return simplifiedPost;
};

// -------------------------------------------------------------------------------------------------------

interface Author {
  id: string;
  name: string;
  bio: string;
  social: {
    website: string;
    github: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  avatar: string;
  banner: string;
  nickname: string;
}

export const getAuthors = async () => {
  return notionClient.databases.query({
    database_id: process.env.AUTHORS_DATABASE_ID!,
  });
};

export const getAuthorById = async (id: string) => {
  return notionClient.pages.retrieve({ page_id: id });
};

export const getAuthorByNickname = async (nickname: string) => {
  return notionClient.databases.query({
    filter: {
      property: "Nickname",
      title: {
        equals: nickname,
      },
    },
    database_id: process.env.AUTHORS_DATABASE_ID!,
  });
};

export const getAuthorByEmail = async (email: string) => {
  return notionClient.databases.query({
    filter: {
      property: "Person",
      people: {
        contains: email,
      },
    },
    database_id: process.env.AUTHORS_DATABASE_ID!,
  });
}


/*
{
  "object": "list",
  "results": [
    {
      "object": "page",
      "id": "ac73180d-c9eb-481f-aab4-9298ba106ef4",
      "created_time": "2024-08-13T14:09:00.000Z",
      "last_edited_time": "2024-09-12T12:24:00.000Z",
      "created_by": {
        "object": "user",
        "id": "2439e043-c4de-4dac-8bca-225299af2a76"
      },
      "last_edited_by": {
        "object": "user",
        "id": "2439e043-c4de-4dac-8bca-225299af2a76"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "database_id",
        "database_id": "05742d0d-a15e-4410-9aa9-290d856371bc"
      },
      "archived": false,
      "in_trash": false,
      "properties": {
        "Author Bio": {
          "id": "FMZ%5C",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Sou um programador apaixonado que adora programar e criar coisas novas. Estou sempre explorando e aprendendo para me manter na vanguarda da inovação. Gosto de colaborar com outras pessoas 
e me sinto realizado ao ver o impacto do meu trabalho no mundo real. Além de programar, gosto de projetos separados e de descobrir novas tecnologias nas horas vagas.",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Sou um programador apaixonado que adora programar e criar coisas novas. Estou sempre explorando e aprendendo para me manter na vanguarda da inovação. Gosto de colaborar com outras pessoas e me sinto realizado ao ver o impacto do meu trabalho no mundo real. Além de programar, gosto de projetos separados e de descobrir novas tecnologias nas horas vagas.",
              "href": null
            }
          ]
        },
        "Instagram": {
          "id": "T%7D%3Cu",
          "type": "url",
          "url": "https://www.instagram.com/pedrokalebj1/"
        },
        "Github": {
          "id": "gQVE",
          "type": "url",
          "url": "https://github.com/LyeZinho"
        },
        "Author": {
          "id": "ix%60%5C",
          "type": "people",
          "people": [
            {
              "object": "user",
              "id": "2439e043-c4de-4dac-8bca-225299af2a76",
              "name": "Pedro Kaleb De Je1",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocKbcJ0_7ZFPqvQfRPCFhcmW3idKldcPxpZVGsTPwSfT3Yw4pM3s=s100",
              "type": "person",
              "person": {
                "email": "pedrokalebdej1@gmail.com"
              }
            }
          ]
        },
        "AuthorIndividualID": {
          "id": "m%3Bds",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "lyeezinho",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "lyeezinho",
              "href": null
            }
          ]
        },
        "Twitter": {
          "id": "ozBs",
          "type": "url",
          "url": "https://x.com/Je1Pedro"
        },
        "Banner": {
          "id": "phil",
          "type": "files",
          "files": [
            {
              "name": "https://i.imgur.com/UxNDPFP.png",
              "type": "external",
              "external": {
                "url": "https://i.imgur.com/UxNDPFP.png"
              }
            }
          ]
        },
        "Website": {
          "id": "wWvs",
          "type": "url",
          "url": "https://pedrokalebdev.pt/"
        },
        "Email": {
          "id": "xapd",
          "type": "email",
          "email": "pedrokalebdej1@gmail.com"
        },
        "Author Profile Picture": {
          "id": "~A%3F%3B",
          "type": "files",
          "files": [
            {
              "name": "https://i.imgur.com/cEY3ysC.png",
              "type": "external",
              "external": {
                "url": "https://i.imgur.com/cEY3ysC.png"
              }
            }
          ]
        },
        "Nickname": {
          "id": "title",
          "type": "title",
          "title": [
            {
              "type": "text",
              "text": {
                "content": "lyeezinho",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "lyeezinho",
              "href": null
            }
          ]
        }
      },
      "url": "https://www.notion.so/lyeezinho-ac73180dc9eb481faab49298ba106ef4",
      "public_url": null
    }
  ],
  "next_cursor": null,
  "has_more": false,
  "type": "page_or_database",
  "page_or_database": {},
  "request_id": "346965fa-1852-4cf1-b1b7-63d61467a838"
}
*/

export const getAuthorPosts = async (nickname: string) => {
  console.log("t1")
  let author = await notionClient.databases.query({
    filter: {
      property: "Nickname",
      title: {
        equals: nickname,
      },
    },
    database_id: process.env.AUTHORS_DATABASE_ID!,
  }) as any;

  console.log("t2")

  let authorId = author.results[0].properties.Author.people[0].id;

  let posts = await notionClient.databases.query({
    filter: {
      and: [
        {
          property: "Author",
          people: {
            contains: authorId,
          },
        },
        {
          property: "Public",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    database_id: process.env.POSTS_DATABASE_ID!,
  });

  return posts.results.map((page: any) => {
    const properties = page.properties as any;
    const cover = properties.Cover.files[0].external.url || properties.Cover.files[0].file.url;
    const simplifiedPost: PostData = {
      id: page.id,
      title: properties.Title.title[0].plain_text,
      description: properties.Description.rich_text[0].plain_text,
      cover,
      banner: properties.Banner.files[0].external.url || properties.Banner.files[0].file.url,
      slug: properties.Slug.rich_text[0].plain_text,
      tags: properties.Tags.multi_select.map((tag: any) => tag.name),
      created_time: page.created_time,
      last_edited_time: page.last_edited_time,
      author: {
        id: properties.Author.people[0].id,
        name: properties.Author.people[0].name,
        avatar: "",
        banner: "",
        email: properties.Author.people[0].person.email,
        nickname: ""
      },
      content: [],
      contentstring: "",
    };

    return simplifiedPost;
  });
}

export const getAuthorData = async (nickname: string) => {
  return await notionClient.databases.query({
    filter: {
      property: "Nickname",
      title: {
        equals: nickname,
      },
    },
    database_id: process.env.AUTHORS_DATABASE_ID!,
  }) as any;
}

export const getAuthorDataSimplifyedByNickname = async (nickname: string) => {
  let authorraw = await notionClient.databases.query({
    filter: {
      property: "Nickname",
      title: {
        equals: nickname,
      },
    },
    database_id: process.env.AUTHORS_DATABASE_ID!,
  }) as any;  

  let author = {
    id: authorraw.results[0].id,
    name: authorraw.results[0].properties.Author.people[0].name,
    bio: authorraw.results[0].properties["Author Bio"]?.rich_text[0].plain_text,
    avatar: authorraw.results[0].properties["Author Profile Picture"].files[0].external.url || authorraw.results[0].properties["Author Profile Picture"].files[0].file.url,
    banner: authorraw.results[0].properties.Banner.files[0].external.url || authorraw.results[0].properties.Banner.files[0].file.url,
    nickname: authorraw.results[0].properties.Nickname.title[0].plain_text,
    social: {
      website: authorraw.results[0].properties.Website.url,
      github: authorraw.results[0].properties.Github.url,
      twitter: authorraw.results[0].properties.Twitter.url,
      instagram: authorraw.results[0].properties.Instagram.url,
      linkedin: authorraw.results[0].properties.Linkedin.url,
    },
  }

  return author;
};

export const getAuthorDataSimplifyedByEmail = async (email: string) => {
  let authorraw = await notionClient.databases.query({
    filter: {
      property: "Person",
      people: {
        contains: email,
      },
    },
    database_id: process.env.AUTHORS_DATABASE_ID!,
  }) as any;

  let author = {
    id: authorraw.results[0].id,
    name: authorraw.results[0].properties.Author.people[0].name,
    bio: authorraw.results[0].properties["Author Bio"]?.rich_text[0].plain_text,
    avatar: authorraw.results[0].properties["Author Profile Picture"].files[0].external.url || authorraw.results[0].properties["Author Profile Picture"].files[0].file.url,
    banner: authorraw.results[0].properties.Banner.files[0].external.url || authorraw.results[0].properties.Banner.files[0].file.url,
    nickname: authorraw.results[0].properties.Nickname.title[0].plain_text,
    social: {
      website: authorraw.results[0].properties.Website.url,
      github: authorraw.results[0].properties.Github.url,
      twitter: authorraw.results[0].properties.Twitter.url,
      instagram: authorraw.results[0].properties.Instagram.url,
      linkedin: authorraw.results[0].properties.Linkedin.url,
    },
  }

  return author;
};