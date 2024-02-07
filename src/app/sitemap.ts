import { getAllPosts } from "@/service/getPostsNew";
import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPosts();


    const postEntries:MetadataRoute.Sitemap = posts.map((post) => ({
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/${post.slug}`,
        lastModified: new Date(post.date),

    }))

    return[
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`
        },
        ...postEntries
    ]
}