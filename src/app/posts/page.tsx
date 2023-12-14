import { getAllPosts } from "@/service/getPostsNew"

export default async function PostsPage() {
    const posts = await getAllPosts();
    console.log('posts',posts)
     return(
        <div>d</div>
     )
}