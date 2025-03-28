// Get news based on user preferences
import { NextApiRequest, NextApiResponse } from "next";
import { bakeNewsNoPref } from "@/utils/news/makedata";

// POST: /api/news/getpreferences   
/*
{
    "origins": [
        {
            "name": "Play Dev",
            "times_visited": 1
        },
        {
            "name": "TabNews",
            "times_visited": 0
        },
        {
            "name": "Dev.to",
            "times_visited": 0
        }
    ],
    "keywords_recurrence": [
        "Progressive Web Apps (PWA)",
        "Você",
        "conhece",
        "as",
        "GoLang"
    ]
}
*/
// const getPreferences = async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//         const news = await bakeNews(dummy.origins, dummy.keywords_recurrence);
//         res.status(200).json(news);
//     } catch (e: unknown) {
//         if (e instanceof Error) {
//             res.status(500).json({ error: e.message });
//         } else {
//             res.status(500).json({ error: "An unexpected error occurred" });
//         }
//     }
// };

const getPreferences = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const news = await bakeNewsNoPref();
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