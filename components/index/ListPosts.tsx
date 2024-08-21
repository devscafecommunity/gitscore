import {
  getAllPosts,
  getAuthorByAuthorId,
  getAllAuthors,
} from "../../utils/Notion/NotionTools";
import Link from "next/link";
import Image from "next/image";
import { PostCard, EmptyPostCard } from "./PostCard";

export default async function ListPosts() {
  const posts = (await getAllPosts()) as any[];
  const authors = (await getAllAuthors()) as any[];

  function getAuthorById(authorId: string) {
    return authors.find(
      (author) => author.properties["Author"].people[0].id === authorId
    );
  }

 // Tags
  return (
    <div className="flex flex-row flex-col gap-6 p-6">
      {posts.length > 0 ? (
        posts.map((post, index) => {
          return (
              <PostCard 
                key={index}
                slug={post.properties.Slug.rich_text[0].plain_text}
                title={post.properties.Title.title[0].plain_text}
                description={post.properties.Description.rich_text[0].plain_text}
                banner={post.properties.Banner.files[0].external.url}
                cover={post.properties.Cover.files[0].external.url}
                tags={post.properties.Tags.multi_select.map((tag: any) => tag)}
                author={post.properties.Author.people[0].name}
                authorProfilePicture={getAuthorById(post.properties.Author.people[0].id).properties["Author Profile Picture"].files[0].external.url}
                authorIndividualID={getAuthorById(post.properties.Author.people[0].id).properties.AuthorIndividualID.rich_text[0].plain_text}
                authorName={getAuthorById(post.properties.Author.people[0].id).properties.Name.title[0].plain_text}
                createdDate={post.properties.CreatedDate.created_time}
                lastEditedDate={post.properties.LastEdited.last_edited_time}
              />
          );
        })
      ) : (
        <EmptyPostCard />
      )}
    </div>
  );
}
