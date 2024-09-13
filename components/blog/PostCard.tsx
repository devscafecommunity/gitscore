import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text, Heading, Divider } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { LuBookOpen, LuBookOpenCheck } from "react-icons/lu";
import { FaBookReader, FaPenFancy } from "react-icons/fa";

import { useCookies } from "react-cookie";

import "@fontsource/jetbrains-mono";

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

export default function PostCard({
  post,
  loading,
}: {
  post: PostData;
  loading?: boolean;
}) {
  const [cookies, setCookie] = useCookies([
    "consent",
    "saved-posts",
    "read-posts",
  ]);

  // if loading is not defined, set it to true places that not use the loading prop will not have a loading skeleton
  if (loading == undefined || loading == null) {
    loading = false;
  }

  const toast = useToast();
  
  // 50:29  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
  // function handleSave(post: any) {

  function handleSave(post: PostData) {
    if (cookies.consent === false) {
      toast({
        title: "Consent required",
        description: "Please enable cookies to save posts",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    } else if (cookies.consent === true) {
      const savedPosts = cookies["saved-posts"] || [];
      const index = savedPosts.findIndex((p: PostData) => p.id === post.id);
      if (index === -1) {
        savedPosts.push(post);
        toast({
          title: "Post saved",
          description: "You can view your saved posts in the saved posts page",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        savedPosts.splice(index, 1);
        toast({
          title: "Post removed",
          description: "You can view your saved posts in the saved posts page",
          status: "info",
          duration: 9000,
          isClosable: true,
        });
      }
      setCookie("saved-posts", savedPosts, { path: "/" });
    } else {
      toast({
        title: "Consent required",
        description: "Please enable cookies to save posts",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  function postIsSaved(post: PostData) {
    const savedPosts = cookies["saved-posts"] || [];
    const index = savedPosts.findIndex((p: PostData) => p.id === post.id);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  }

  function postIsReaded(post: PostData) {
    const readPosts = cookies["read-posts"] || [];
    const index = readPosts.findIndex((p: PostData) => p.id === post.id);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      key={post.id}
      className="flex flex-col gap-4 p-4 m-2"
    >
      <Card className="w-full max-w-2/3 p-4 m-2 ">
        <CardHeader></CardHeader>
        <CardBody className="flex flex-row gap-2 justify-center items-center">
        {loading ? (
            <Skeleton height="20px" />
          ) : (
            <Image
              src={post.cover}
              alt={post.title}
              className="rounded-lg h-40 w-40 object-cover"
            />
          )}
          <div className="flex flex-col gap-4">
            <Heading as="h2" size="lg" fontFamily="JetBrains Mono">
              {post.title}
            </Heading>
            <Text fontFamily="JetBrains Mono">{post.description}</Text>
            <div className="flex flex-row gap-4">
              {post.tags.map((tag, index) => (
                <Tag key={index} size="sm" colorScheme="blue">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup className="flex flex-row gap-4 justify-center items-center">
            <Button
              leftIcon={<FaBookReader />}
              onClick={() =>
                (document.location.href = `/blog/posts/${post.slug}`)
              }
              fontFamily="JetBrains Mono"
            >
              Read The Post
            </Button>
            <div className="flex flex-row gap-4 justify-center items-center">
              {postIsSaved(post) ? (
                <Button onClick={() => handleSave(post)} fontFamily="JetBrains Mono">
                  <CiBookmarkCheck size={25} />
                </Button>
              ) : (
                <Button onClick={() => handleSave(post)} fontFamily="JetBrains Mono">
                  <CiBookmark size={25} />
                </Button>
              )}
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <Button
                leftIcon={<FaPenFancy />}
                onClick={() =>
                  (document.location.href = `/blog/posts/${post.slug}`)
                }
                fontFamily="JetBrains Mono"
              >
                {post.author.name}
              </Button>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              {postIsReaded(post) ? (
                <LuBookOpenCheck size={30} />
              ) : (
                <LuBookOpen size={30} />
              )}
            </div>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
