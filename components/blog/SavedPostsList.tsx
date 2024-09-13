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
import { Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Import cookie
import { useCookies } from "react-cookie";

// PostCard component
import PostCard  from "./PostCard";

import PostData from "@/utils/interfaces/PostData";

export default function SavedPostsList() {
  // Cookies
  const [cookies] = useCookies([
    "consent",
    "saved-posts",
    "read-posts",
  ]);

  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  const toast = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        toast({
          title: "Loading taking too long",
          description: "Please try again later",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setTimeout(() => {
          //   window.location.href = "/";
          toast.closeAll();
          toast({
            title: "Can't load posts",
            description:
              "We are having trouble loading the posts, please try again later, redirecting to home page...",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 500);
        }, 10000);
      }
    }, 20000);
    return () => clearTimeout(timer);
  }, [loading, toast]);

  let attempts = 0;

  useEffect(() => {
    fetch("/api/blog/getrecent")
      .then((res) => res.json())
      .then((data) => {
        // Verify if the data is an error or empty
        attempts++;
        if (data.error) {
          toast({
            title: "Error",
            description: data.error,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return;
        } else if (data.length === 0) {
          toast({
            title: "No posts",
            description:
              "Recived empty posts, trying again..., [Attempt: " +
              attempts +
              "]",
            status: "info",
            duration: 9000,
            isClosable: true,
          });
          return;
        } else {
          setPosts(data);
          setLoading(false);
        }
      });
  });

  function postIsSaved(post: PostData) {
    const savedPosts = cookies["saved-posts"] || [];
    const index = savedPosts.findIndex((p: PostData) => p.id === post.id);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  }


  // Filter posts that postIsSaved is true
  const savedPostsraw = posts.filter((post) => postIsSaved(post));

  // If the consents is false return a message
  if (cookies.consent === false) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <Text>Consent required</Text>
        <Text>Please enable cookies to save posts</Text>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {savedPostsraw.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <Text>No saved posts</Text>
          </div>
        ) : (
          savedPostsraw.map((post: PostData) => (
            <PostCard key={post.id} loading={loading} post={post} />
          ))
        )}
      </div>
    );
  }
}
