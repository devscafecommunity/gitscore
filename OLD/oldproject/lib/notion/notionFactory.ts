import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN, // Adicione seu token de integração aqui
});

export default notion;