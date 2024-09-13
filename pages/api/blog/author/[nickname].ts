import { getAuthorPosts, getAuthorDataSimplifyedByNickname, getAuthorByNickname } from "@/utils/Blog";
import { NextApiRequest, NextApiResponse } from "next";

// export default async (req: NextApiRequest, res: NextApiResponse) => {
// Replace arrow function: 4:1  Warning: Assign arrow function to a variable before exporting as module default

const getAuthor = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nickname } = req.query;
  try {
    const author = await getAuthorDataSimplifyedByNickname(nickname as string);
    console.log("t1")
    const posts = await getAuthorPosts(nickname as string);
    console.log("t2")

    const data = {
        ...author,
        posts: posts
    }

    res.status(200).json(data);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export default getAuthor;