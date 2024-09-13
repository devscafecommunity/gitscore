import { getTotalEventCount } from "@/utils/Events";
import { NextApiRequest, NextApiResponse } from "next";

const getEventCount = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const count = await getTotalEventCount();
    res.status(200).json({ count });
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export default getEventCount;