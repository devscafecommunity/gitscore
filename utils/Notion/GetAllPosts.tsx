//
import { getAllPosts, getAllAuthors } from "./NotionTools";

// Next api imports
import { NextApiRequest, NextApiResponse } from "next";

// Inteface para a lista de posts
interface PostData {
    id: string;
    title: string;
    tags: string[];
    description: string;
    cover: string;
    author: string;
    authorAvatar: string;
    authorIndividualId: string;
    createdDate: string;
    lastEdited: string;
    url: string;
    public: boolean;
    slug: string;
}

// Interface para um post unico
interface Post {
    id: string;
    title: string;
    tags: string[];
    description: string;
    cover: string;
    slug: string;
    author: string;
}

// Interface para um autor
interface Author {
    id: string;
    name: string;
    avatar: string;
    email: string;
}

/*
[
  {
    "object": "page",
    "id": "18a73ffd-d257-4514-8d71-685797f969ca",
    "created_time": "2024-08-16T20:40:00.000Z",
    "last_edited_time": "2024-08-16T20:53:00.000Z",
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
      "database_id": "b7b0ed40-0fe2-4243-bf00-e1ab925cb9fe"
    },
    "archived": false,
    "in_trash": false,
    "properties": {
      "Author": {
        "id": "%3A%3B%60e",
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
      "LastEdited": {
        "id": "%3Dl~D",
        "type": "last_edited_time",
        "last_edited_time": "2024-08-16T20:53:00.000Z"
      },
      "Banner": {
        "id": "HhBn",
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
      "Public": {
        "id": "KHj%40",
        "type": "checkbox",
        "checkbox": false
      },
      "Slug": {
        "id": "_ozr",
        "type": "rich_text",
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": "codigo-legado-e-uma-bola-de-neve",
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
            "plain_text": "codigo-legado-e-uma-bola-de-neve",
            "href": null
          }
        ]
      },
      "CreatedDate": {
        "id": "bMLz",
        "type": "created_time",
        "created_time": "2024-08-16T20:40:00.000Z"
      },
      "Cover": {
        "id": "cRnc",
        "type": "files",
        "files": [
          {
            "name": "https://i.imgur.com/NRNoqdk.png",
            "type": "external",
            "external": {
              "url": "https://i.imgur.com/NRNoqdk.png"
            }
          }
        ]
      },
      "Tags": {
        "id": "i%60MR",
        "type": "multi_select",
        "multi_select": [
          {
            "id": "90c03c31-0ec5-442a-950c-b9b7168913b9",
            "name": "Boas Praticas",
            "color": "orange"
          },
          {
            "id": "f07d377f-d2cc-44cb-8365-e6daa4c398d4",
            "name": "Clean code",
            "color": "purple"
          },
          {
            "id": "be5b48f1-1da1-40a6-9ec1-540550ff39cc",
            "name": "Codigo legado",
            "color": "gray"
          },
          {
            "id": "1d0cdba8-12a2-43d3-8dee-56827ec1f249",
            "name": "Ambiente de trabalho",
            "color": "default"
          }
        ]
      },
      "Description": {
        "id": "lP%7Dk",
        "type": "rich_text",
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": "Codigo legado é algo que ",
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
            "plain_text": "Codigo legado é algo que ",
            "href": null
          }
        ]
      },
      "Title": {
        "id": "title",
        "type": "title",
        "title": [
          {
            "type": "text",
            "text": {
              "content": "Código legado é uma bola de neve e eu posso provar.",
              "link": null
            },
            "annotations": {
              "bold": true,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "Código legado é uma bola de neve e eu posso provar.",
            "href": null
          }
        ]
      }
    },
    "url": "https://www.notion.so/C-digo-legado-uma-bola-de-neve-e-eu-posso-provar-18a73ffdd25745148d71685797f969ca",
    "public_url": null
  },
  {
    "object": "page",
    "id": "80fcbc66-99de-4ba5-845f-d1884a50c563",
    "created_time": "2024-08-09T19:40:00.000Z",
    "last_edited_time": "2024-08-16T20:12:00.000Z",
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
      "database_id": "b7b0ed40-0fe2-4243-bf00-e1ab925cb9fe"
    },
    "archived": false,
    "in_trash": false,
    "properties": {
      "Author": {
        "id": "%3A%3B%60e",
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
      "LastEdited": {
        "id": "%3Dl~D",
        "type": "last_edited_time",
        "last_edited_time": "2024-08-16T20:12:00.000Z"
      },
      "Banner": {
        "id": "HhBn",
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
      "Public": {
        "id": "KHj%40",
        "type": "checkbox",
        "checkbox": true
      },
      "Slug": {
        "id": "_ozr",
        "type": "rich_text",
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": "conceitos-solid-cleancode",
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
            "plain_text": "conceitos-solid-cleancode",
            "href": null
          }
        ]
      },
      "CreatedDate": {
        "id": "bMLz",
        "type": "created_time",
        "created_time": "2024-08-09T19:40:00.000Z"
      },
      "Cover": {
        "id": "cRnc",
        "type": "files",
        "files": [
          {
            "name": "https://i.imgur.com/3ToN0IJ.png",
            "type": "external",
            "external": {
              "url": "https://i.imgur.com/3ToN0IJ.png"
            }
          }
        ]
      },
      "Tags": {
        "id": "i%60MR",
        "type": "multi_select",
        "multi_select": [
          {
            "id": "9e47d657-4286-4f8d-874b-3f80cf524882",
            "name": "S.O.L.I.D",
            "color": "brown"
          },
          {
            "id": "f07d377f-d2cc-44cb-8365-e6daa4c398d4",
            "name": "Clean code",
            "color": "purple"
          },
          {
            "id": "90c03c31-0ec5-442a-950c-b9b7168913b9",
            "name": "Boas Praticas",
            "color": "orange"
          }
        ]
      },
      "Description": {
        "id": "lP%7Dk",
        "type": "rich_text",
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": "Quando se trata de escrever código de qualidade, existem várias diretrizes e princípios que podem nos ajudar a alcançar esse objetivo. ",
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
            "plain_text": "Quando se trata de escrever código de qualidade, existem várias diretrizes e princípios que podem nos ajudar a alcançar esse objetivo. ",
            "href": null
          }
        ]
      },
      "Title": {
        "id": "title",
        "type": "title",
        "title": [
          {
            "type": "text",
            "text": {
              "content": "Clean Code com Princípios S.O.L.I.D",
              "link": null
            },
            "annotations": {
              "bold": true,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "Clean Code com Princípios S.O.L.I.D",
            "href": null
          }
        ]
      }
    },
    "url": "https://www.notion.so/Clean-Code-com-Princ-pios-S-O-L-I-D-80fcbc6699de4ba5845fd1884a50c563",
    "public_url": null
  }
]
*/

// Função para buscar posts
async function getPosts() {
    const posts = await getAllPosts() as any[];
    const authors = await getAllAuthors() as any[];

    const postListRaw = posts.map((post) => {
      /*
        "Author": {
        "id": "%3A%3B%60e",
        "type": "people",
        "people": [
          {
            "object": "user",
            "id": "2439e043-c4de-4dac-8bca-225299af2a76",
            "name": "Pedro Kaleb De Je1",
            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocKbcJ0_7ZFPqvQfRPCFhcmW3idKldcPxpZVGsTPwSfT3Yw4pM3s=s100",
            "type": "person",
            "person": {
              "email": "pedrokalebdej1@gmail.com" <- Use this to match with the author list
            }
          }
        ]
      },
      */

        return {
            id: post.id,
            title: post.properties.Title.title[0].text.content,
            tags: post.properties.Tags.multi_select.map(( tag: any ) => tag.name),
            description: post.properties.Description.rich_text[0].text.content,
            cover: post.properties.Cover.files[0].external.url,
            authorMail: post.properties.Author.people[0].person.email,
            createdDate: post.properties.CreatedDate.created_time,
            lastEdited: post.properties.LastEdited.last_edited_time,
            public: post.properties.Public.checkbox,
            slug: post.properties.Slug.rich_text[0].text,
            url: "/posts/" + post.properties.Slug.rich_text[0].text.content,
        }
    });

    const postList = postListRaw.filter((post) => post.public === true);
    

    // Mapear os autores
    const authorList = authors.map((author) => {
        return {
            id: author.id,
            name: author.properties.Name.title[0].text.content,
            avatar: author.properties["Author Profile Picture"].files[0].external.url,
            email: author.properties.Author.people[0].person.email,
            individualId: author.properties.AuthorIndividualID.rich_text[0].text.content,

        }
    });

    const postsData = postList.map((post) => {
        // console.log(authorList);
        /*
        [
          {
            id: 'ac73180d-c9eb-481f-aab4-9298ba106ef4',
            name: 'Pedro k. Jesus',
            avatar: 'https://i.imgur.com/cEY3ysC.png',
            email: 'pedrokalebdej1@gmail.com',
            individualId: 'lyeezinho'
          }
        ]
        */
        // console.log("Author: ", author);
        const author = authorList.find((author) => author.email === post.authorMail);

        return {
            id: post.id,
            title: post.title,
            tags: post.tags,
            description: post.description,
            cover: post.cover,
            author: author?.name,
            authorAvatar: author?.avatar,
            authorIndividualId: author?.individualId,
            createdDate: post.createdDate,
            lastEdited: post.lastEdited,
            url: post.url,
            public: post.public,
            slug: post.slug,
        }
    });

    return postsData;
}

export { getPosts };