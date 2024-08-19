import "server-only";

import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";
const { NotionToMarkdown } = require("notion-to-md");

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages = cache(() => {
  return notionClient.databases.query({
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
    database_id: process.env.NOTION_DB_POST_ID!,
  });
});

export const getPageContent = cache((pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

export const getPageBySlug = cache((slug: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DB_POST_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getPostByAuthorId = cache((authorId: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DB_POST_ID!,
      filter: {
        property: "Author",
        people: {
          contains: authorId,
        },
      },
    })
    .then((res) => res.results as PageObjectResponse[]);
});

export const getAuthorByAuthorId = cache((authorId: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DB_AUTHORS_ID!,
      filter: {
        property: "Author",
        people: {
          contains: authorId,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getAuthorByAuthorIndividualID = cache((authorIndividualID: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DB_AUTHORS_ID!,
      filter: {
        property: "AuthorIndividualID",
        rich_text: {
          equals: authorIndividualID,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getAllPosts = cache(() => {
  return notionClient.databases.query({
    database_id: process.env.NOTION_DB_POST_ID!,
  }).then((res) => res.results);
});

export const getAllAuthors = cache(() => {
  return notionClient.databases.query({
    database_id: process.env.NOTION_DB_AUTHORS_ID!,
  }).then((res) => res.results);
});