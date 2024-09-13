import { getPostDataSimplified } from "../../../utils/Blog";
import { NextApiRequest, NextApiResponse } from "next";

const getRecentPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const raw = await getPostDataSimplified();

    // Order by created_time	"2024-09-03T09:38:00.000Z"
    const posts = raw.sort((a, b) => {
      return new Date(b.created_time).getTime() - new Date(a.created_time).getTime();
    });

    res.status(200).json(posts);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export default getRecentPosts;