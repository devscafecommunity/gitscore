import { getPostContent, getPostDataSimplifiedBySlug } from "@/utils/Blog";
import { NextApiRequest, NextApiResponse } from "next";

const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  try {
    const data = await getPostDataSimplifiedBySlug(slug as string);
    const content = await getPostContent(data.id);
    res.status(200).json({ ...data, content });
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export default getPost;