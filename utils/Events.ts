import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { stat } from "fs";
import { cache } from "react";

export const notionClient = new Client({
  auth: process.env.NOTION_SECRET,
});

// EVENTS_DATABASE_ID
export const getEventsRaw = async () => {
  return notionClient.databases.query({
    filter: {
      property: "Public",
      checkbox: {
        equals: true,
      },
    },
    database_id: process.env.EVENTS_DATABASE_ID!,
  });
};

export const getTotalEventCount = async () => {
  let events = notionClient.databases.query({
    filter: {
      property: "Public",
      checkbox: {
        equals: true,
      },
    },
    database_id: process.env.EVENTS_DATABASE_ID!,
  });

  return events.then((res) => res.results.length);
};



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

export const getEventsSimplified = async () => {
  let events = (await getEventsRaw()) as any;

  let simplifiedEvents = events.results.map((event: any) => {
    return {
      id: event.id,
      name: event.properties.Name.title[0].plain_text,
      description: event.properties.Description.rich_text[0].plain_text,
      date: event.properties.Date?.date?.start,
      location: event.properties.Location.rich_text[0]?.plain_text,
      tags: event.properties.Tags.multi_select.map((tag: any) => tag.name),
      public: event.properties.Public.checkbox,
      organizer: event.properties.Organizer.people[0]?.name,
      equip: event.properties.Equip.multi_select.map((equip: any) => equip.name),
      created_time: event.created_time,
      last_edited_time: event.last_edited_time,
      total_cost: event.properties.Total_Cost.number,
      total_open: event.properties.Total_Open.number,
      status: event.properties.Status.status.name,
      banner: event.properties.Banner.files[0]?.external.url || event.properties.Banner.files[0]?.file.url,
      progress: event.properties.Progress.multi_select.map((progress: any) => progress.name),
      url: event.url,
    };
  });

  return simplifiedEvents;
};

export const getEventsSimplifiedByRecent = async () => {
  let events = (await getEventsSimplified()) as Event[];

  return events.sort((a, b) => {
    return new Date(b.created_time).getTime() - new Date(a.created_time).getTime();
  });
};