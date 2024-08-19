import { getAuthorByAuthorIndividualID } from "../../../../../../utils/Notion/NotionTools";
import { getPostByAuthorId } from "../../../../../../utils/Notion/NotionTools";
import { NextResponse } from "next/server";
import { getAuthor } from "../../../../../../utils/Notion/GetAuthor";

// : /api/authors/getauthor/[query]/route.ts

export async function GET(req: Request, { params }: { params: { query: string } }) {
    const authorIndividualID = params.query; // Extract query parameter from the route params
    try {
        const authorData = await getAuthor(authorIndividualID);
        return NextResponse.json(authorData, { status: 200 });
    } catch (error) {
        console.error("Error fetching author:", error);
        return NextResponse.json({ error: "Failed to fetch author" }, { status: 500 });
    }
}