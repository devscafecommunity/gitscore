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

// Função para buscar posts
async function getPosts() {
  const posts = await getAllPosts() as any[];
  const authors = await getAllAuthors() as any[];

  const postListRaw = posts.map((post) => {
      if (!post.properties.Slug.rich_text[0].text.content || !post.properties.Title.title[0].text.content) {
          return {
              public: false,
          }
      }

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

  const authorList = authors.map((author) => {
    if (
      !author.properties.Name?.title[0]?.text?.content || 
      !author.properties["Author Profile Picture"]?.files[0]?.external?.url ||
      !author.properties.Author?.people[0]?.person?.email ||
      !author.properties.AuthorIndividualID?.rich_text[0]?.text.content
    ) {
      return {
        id: author.id,
        name: "Author Name",
        avatar: "https://i.imgur.com/cEY3ysC.png",
        email: "",
        individualId: "author"
      }
    } else {
      return {
        id: author.id,
        name: author.properties.Name.title[0].text.content || "Author Name",
        avatar: author.properties["Author Profile Picture"].files[0].external.url || "https://blog.devscafe.pt/assets/logo.png",
        email: author.properties.Author.people[0].person.email || "",
        individualId: author.properties.AuthorIndividualID.rich_text[0].text.content || "author"
      }
    }
  });


  const postsData = postList.map((post) => {
      const author = authorList.find((author) => author.email === post.authorMail);
      return {
          id: post.id,
          title: post.title,
          tags: post.tags,
          description: post.description,
          cover: post.cover,
          author: author?.name || "Author Name",
          authorAvatar: author?.avatar || "https://blog.devscafe.pt/assets/logo.png",
          authorIndividualId: author?.individualId || "author",
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