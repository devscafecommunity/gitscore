// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "@/utils/Blog";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const slug = "test"; 
  getPostBySlug(slug as string)
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(500).json({ error: error.message }));
}
