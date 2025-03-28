// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { getPostBySlug } from "@/utils/Blog";
import { getCurrentCodeforge } from "@/utils/Codeforge";

type data = {
  string: string
  number: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<data>,
) {
  const data = {
    string: "Hello, world!",
    number: 42,
  }
  
  // console.log(JSON.stringify(await getCodeforgeRaw(), null, 4));
  console.log(JSON.stringify(await getCurrentCodeforge(), null, 4));

  res.status(200).json(data);
}
