import { getEventsSimplifiedByRecent } from "../../../utils/Events";
import { NextApiRequest, NextApiResponse } from "next";

// export default async (req: NextApiRequest, res: NextApiResponse) => { , getEventsRaw

const getEvents = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const events = await getEventsSimplifiedByRecent();
    res.status(200).json(events);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export default getEvents;