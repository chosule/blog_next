import { Post } from "@/service/getPostsNew";


type Props = {
    posts:Post[],
    selected:string;
    filterKey:keyof Post
}
  

const ALLPOSTS = "all Post";

const  filteredPostsContent = (posts:Post[], selected:string, filterKey:keyof Post)=> {
    console.log('posts',posts)
    return selected === ALLPOSTS
      ? posts
      : posts.filter((post) => post[filterKey][0] === selected);
  }


  export default filteredPostsContent;