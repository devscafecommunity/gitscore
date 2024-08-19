import { getPostByAuthorId } from "./NotionTools";
import { getAuthorByAuthorIndividualID } from "./NotionTools";

export async function getAuthor(authorIndividualID: string) {
    const authorData = await getAuthorByAuthorIndividualID(authorIndividualID);
    const authorId = (authorData?.properties.Author as any).people[0].id;
    const authorName = (authorData?.properties.Name as any).title[0].plain_text;
    const authorBio = (authorData?.properties["Author Bio"] as any).rich_text[0].plain_text;
    const authorProfilePicture = (authorData?.properties["Author Profile Picture"] as any).files[0].external.url;
    const authorBanner = (authorData?.properties.Banner as any).files[0].external.url;
    const authorWebsite = (authorData?.properties.Website as any).url;
    const authorGithub = (authorData?.properties.Github as any).url;
    const authorTwitter = (authorData?.properties.Twitter as any).url;
    const authorInstagram = (authorData?.properties.Instagram as any).url;
    const authorEmail = (authorData?.properties.Email as any).email;

    const authorPosts = await getPostByAuthorId(authorId);

    const posts = authorPosts.map((post) => {
        let title = (post.properties.Title as any).title[0].plain_text;
        let cover = (post.properties.Cover as any).files[0].external.url;
        let tags = (post.properties.Tags as any).multi_select;
        let description = (post.properties.Description as any).rich_text[0].plain_text;
        let createdDate = (post.properties.CreatedDate as any).created_time;
        let lastEdited = (post.properties.LastEdited as any).last_edited_time;
        let url = `/posts/${(post.properties.Slug as any).rich_text[0].plain_text}`;
        let publicpost = (post.properties.Public as any).checkbox;
        let slug = (post.properties.Slug as any).rich_text[0].plain_text;

        return {
            title,
            tags,
            description,
            cover,
            createdDate,
            lastEdited,
            url,
            publicpost,
            slug,
        };
    });

    return {
        authorName,
        authorBio,
        authorProfilePicture,
        authorBanner,
        authorWebsite,
        authorGithub,
        authorTwitter,
        authorInstagram,
        authorEmail,
        authorPosts: posts,
        authorId,
        authorIndividualID,
    };
}