import { NextApiRequest, NextApiResponse } from "next";
import { getCurrentCodeforge } from "@/utils/Codeforge";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const codeforge = await getCurrentCodeforge();
        res.status(200).json(codeforge);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
};

