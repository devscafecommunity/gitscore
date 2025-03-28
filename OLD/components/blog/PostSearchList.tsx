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
import { Input } from "@chakra-ui/react";

import { useEffect, useState } from "react";

// PostCard component
import PostCard from "./PostCard";

// Normalize search list
import Fuse from "fuse.js";

export interface Post {
  id: string;
  title: string;
  description: string;
  cover: string;
  slug?: string;
  tags: string[];
  created_time: string;
  last_edited_time: string;
  author?: string;
  content: string;
}

import PostData from "@/utils/interfaces/PostData";

export default function PostSearchList() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<PostData[]>([]);

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

  // Normalize search list if not imput just return the posts if the query is empty
  // return all posts
  useEffect(() => {
    if (search === "") {
      setSearchResults(posts);
      return;
    }

    // Normalize search list
    const fuse = new Fuse(posts, {
      keys: ["title", "description", "tags"],
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 3,
      ignoreLocation: true,
      ignoreFieldNorm: true,
      threshold: 0.3,
      useExtendedSearch: true,
    });

    const results = fuse.search(search);
    const searchResults = results.map((result) => result.item);
    setSearchResults(searchResults);
  }, [search, posts]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="h-4" />
      <div className="flex flex-col items-center justify-center gap-4">
        <Input
          value={search}
          onChange={handleSearch}
          placeholder="Search posts..."
          className="w-full"
        />
      </div>
      <div className="h-4" />
      <div className="flex flex-col items-center justify-center gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((post: PostData) => (
            <PostCard key={post.id} loading={loading} post={post} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 p-8">
            <Text>No results found</Text>
          </div>
        )}
      </div>
    </div>
  );
}
