// Get news based on user preferences
import { NextApiRequest, NextApiResponse } from "next";
import { bakeNews } from "@/utils/news/makedata";

const getPreferences = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const news = await bakeNews(req.body.origins, req.body.keywords_recurrence);
        res.status(200).json(news);
    } catch (e: unknown) {
        if (e instanceof Error) {
            res.status(500).json({ error: e.message });
        } else {
            res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
};

export default getPreferences;