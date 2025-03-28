import Data from "./Data";

export default interface PostData {
    id: string;
    title: string;
    description: string;
    cover: string;
    banner: string;
    slug: string;
    tags: string[];
    created_time: string;
    last_edited_time: string;
    author: {
        id: string;
        name: string;
        avatar: string;
        banner: string;
        email: string;
        nickname: string;
    };
    content: Data[];
    contentstring: string;
}