import { getPages } from "../../../utils/Blog";
import { NextApiRequest, NextApiResponse } from "next";

// export default async (req: NextApiRequest, res: NextApiResponse) => {

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await getPages();
    res.status(200).json(posts);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export default getPosts;