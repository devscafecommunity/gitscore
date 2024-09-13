import { getPostDataSimplified } from "../../../utils/Blog";
import { NextApiRequest, NextApiResponse } from "next";

const getAllPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await getPostDataSimplified();
    res.status(200).json(posts);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export default getAllPosts;