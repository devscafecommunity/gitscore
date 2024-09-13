// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { getPostBySlug } from "@/utils/Blog";

type data = {
  string: string
  number: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<data>,
) {
  const data = {
    string: "Hello, world!",
    number: 42,
  }
  res.status(200).json(data);
}
