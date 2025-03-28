// Get all recent posts from: /api/blog/getrecent
/*
[
  {
    "id": "e3b7d032-44bd-4a77-8fef-6472617d5c21",
    "title": "Titulo do post",
    "description": "Descrição do post etc…",
    "cover": "https://i.imgur.com/SL6jvOr.png",
    "tags": [
      "test"
    ],
    "created_time": "2024-09-07T19:02:00.000Z",
    "last_edited_time": "2024-09-07T23:20:00.000Z",
    "content": []
  }
]
*/

// Chakra
import { Heading } from "@chakra-ui/react";

// PostCard component
import PostCard from "./PostCard";

import Data from "@/utils/interfaces/Data";

export default function AuthorPostList(
    { data }: { data: Data }
) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {
        data.posts.length === 0 ? (
          <div>
            <Heading>
              No posts found, or being loaded
            </Heading>
          </div>
        ) : (
          <div>
            {
              data.posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
}