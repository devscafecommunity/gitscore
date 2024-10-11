import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { stat } from "fs";
import { cache } from "react";
//CODEFORGE_DATABASE_ID=a8b783e934aa4cb3a25b1093a02f3477
export const notionClient = new Client({
  auth: process.env.NOTION_SECRET,
});

/*
{
    "object": "list",
    "results": [
        {
            "object": "page",
            "id": "fb21aaec-383f-4cc6-9000-f7e9456abe9e",
            "created_time": "2024-10-11T14:40:00.000Z",
            "last_edited_time": "2024-10-11T15:02:00.000Z",
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
                "database_id": "a8b783e9-34aa-4cb3-a25b-1093a02f3477"
            },
            "archived": false,
            "in_trash": false,
            "properties": {
                "Lore": {
                    "id": "B%3FPW",
                    "type": "rich_text",
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Na cidade de Arcádia, situada em meio a colinas verdejantes e florestas misteriosas, ergue-se a majestosa Torre dos Sábios. Dentro de seus antigos muros de pedra, os sábios da cidade reuniram-se por séculos para desvendar os segredos do universo e explorar os mistérios da matemática e da lógica.\\n\\nPorém, recentemente, um enigma intrigante surgiu diante dos sábios: uma série de expressões matemáticas complexas, escritas em uma língua antiga e misteriosa. Os sábios estão determinados a decifrar essas expressões e desvendar os segredos que elas guardam.\\n\\nAgora, é hora de você se juntar aos sábios nesta jornada de descoberta e sabedoria. Desenvolva um programa que implemente um tokenizer e um parser simples para interpretar essas expressões matemáticas. Junte-se aos sábios da Torre e desvende os enigmas da matemática!",
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
                            "plain_text": "Na cidade de Arcádia, situada em meio a colinas verdejantes e florestas misteriosas, ergue-se a majestosa Torre dos Sábios. Dentro de seus antigos muros de pedra, os sábios da cidade reuniram-se por séculos para desvendar os segredos do universo e explorar os mistérios da matemática e da lógica.\\n\\nPorém, recentemente, um enigma intrigante surgiu diante dos sábios: uma série de expressões matemáticas complexas, escritas em uma língua antiga e misteriosa. Os sábios estão determinados a decifrar essas expressões e desvendar os segredos que elas guardam.\\n\\nAgora, é hora de você se juntar aos sábios nesta jornada de descoberta e sabedoria. Desenvolva um programa que implemente um tokenizer e um parser simples para interpretar essas expressões matemáticas. Junte-se aos sábios da Torre e desvende os enigmas da matemática!",
                            "href": null
                        }
                    ]
                },
                "Tags": {
                    "id": "C%3BD%7B",
                    "type": "multi_select",
                    "multi_select": [
                        {
                            "id": "3f1c5ce6-255c-4078-a36a-038e6a3cae52",
                            "name": "Desing de compiladores",
                            "color": "blue"
                        },
                        {
                            "id": "7da814f5-3dc3-4a72-a786-49599c265477",
                            "name": "Estrutura de dados",
                            "color": "red"
                        }
                    ]
                },
                "Start": {
                    "id": "So%3Dh",
                    "type": "date",
                    "date": {
                        "start": "2024-10-11",
                        "end": null,
                        "time_zone": null
                    }
                },
                "Tasks": {
                    "id": "%60%3DOo",
                    "type": "multi_select",
                    "multi_select": [
                        {
                            "id": "b2cfdf39-00fd-46bf-9ce3-46dbfaa539cd",
                            "name": "Implementar um tokenizer para dividir a expressão matemática em tokens significativos.",
                            "color": "yellow"
                        },
                        {
                            "id": "632a1ead-dfb3-4a93-91cc-7f6452c91d88",
                            "name": "Desenvolver um parser para interpretar os tokens e calcular o resultado da expressão.",
                            "color": "gray"
                        },
                        {
                            "id": "8bd8d072-f18c-4ac9-80d4-1e26e3c290a6",
                            "name": "Suportar operadores matemáticos básicos como adição subtração multiplicação e divisão.",
                            "color": "brown"
                        },
                        {
                            "id": "edaa8815-869f-4390-8de1-75060f244d9b",
                            "name": "Assegurar que o tokenizer e o parser sejam capazes de lidar com expressões matemáticas complexas de forma eficiente e precisa.",
                            "color": "orange"
                        }
                    ]
                },
                "End": {
                    "id": "%60P%3A%7C",
                    "type": "date",
                    "date": {
                        "start": "2024-10-31",
                        "end": null,
                        "time_zone": null
                    }
                },
                "Files & media": {
                    "id": "a%7DXS",
                    "type": "files",
                    "files": [
                        {
                            "name": "https://raw.githubusercontent.com/devscafecommunity/codeforge/main/chalanges/04-05-2024/parser.png",
                            "type": "external",
                            "external": {
                                "url": "https://raw.githubusercontent.com/devscafecommunity/codeforge/main/chalanges/04-05-2024/parser.png"
                            }
                        }
                    ]
                },
                "Solution": {
                    "id": "m%7Cd%5E",
                    "type": "url",
                    "url": "https://github.com/devscafecommunity/codeforge/blob/main/chalanges/04-05-2024/parser.py"
                },
                "Public": {
                    "id": "~htC",
                    "type": "checkbox",
                    "checkbox": true
                },
                "Title": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "A Torre dos Sábios",
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
                            "plain_text": "A Torre dos Sábios",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/A-Torre-dos-S-bios-fb21aaec383f4cc69000f7e9456abe9e",
            "public_url": null
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "page_or_database",
    "page_or_database": {},
    "request_id": "ab9f3477-040d-4d51-97ed-94dd73e582f4"
}
*/

/*
example:
interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  tags: string[];
  public: boolean;
  organizer: string;
  equip: string[];
  created_time: string;
  last_edited_time: string;
  total_cost: number;
  total_open: number;
  status: string;
  banner: string;
  progress: string[];
  url: string;
}
*/

interface Codeforge {
    id: string;
    title: string;
    lore: string;
    tags: string[];
    tasks: string[];
    start_date: string;
    end_date: string;
    solution: string;
    cover: string;
}
    


export const getCodeforgeRaw = async () => {
    return notionClient.databases.query({
        filter: {
            property: "Public",
            checkbox: {
                equals: true,
            },
        },
        database_id: process.env.CODEFORGE_DATABASE_ID!,
    });
};

export const getCurrentCodeforge = async () => {
    const rawData = await getCodeforgeRaw();
    const data = rawData.results.map((result: any) => {
        const event: Codeforge = {
            id: result.id,
            title: result.properties.Title?.title[0].text.content ?? "",
            lore: result.properties.Lore?.rich_text?.[0].plain_text ?? "",
            tags: result.properties.Tags?.multi_select.map((tag: any) => tag.name) ?? [],
            tasks: result.properties.Tasks?.multi_select.map((task: any) => task.name) ?? [],
            start_date: result.properties.Start?.date?.start ?? "",
            end_date: result.properties.End?.date?.start ?? "",
            solution: result.properties.Solution?.url ?? "",
            cover: result.properties.Files_and_media?.files[0]?.external?.url ?? "",
        };
        return event
        // Add more properties if needed
        // ...
    });
    return data[0];
    // Return the first event if there's only one
    // Otherwise, return the array of events
};
