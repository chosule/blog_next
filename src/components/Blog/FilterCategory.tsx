'use client';

import Image from "next/image"
import forder_img from "../../../public/folder_img.png"
import { Posts } from "@/service/getPosts";
import Link from "next/link";
import { useState } from "react";
import PostsGrid from "../Post/PostsGrid";

type Props = {
    posts:Posts[],
    categories:string[]
}

const ALLPOSTS = 'all-post';

export default function FilterCategory({posts,categories}:Props) {
    
    const [seleted , setSelected] = useState(ALLPOSTS);
    //유저가 클릭한 category이름과 맞는 포스트만 보여줘야함 
    const filtered = seleted === ALLPOSTS ? posts : posts.filter((post) => post.category === seleted);

    
    return(
        <>
            <div className="my-20">
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-black italic">Blog</h1>
                    <p className="text-gray-500">클릭시 해당 시리즈에 대한 포스트를 보실수 있습니다.</p>
                </div>
                <PostsGrid posts={filtered}/>
                <ul className="grid grid-cols-6">
                    {categories.map((category,index) =>(
                        <Link href={`/blog/${category}`} className="my-20 gap-4 flex flex-col items-center" key={index}>
                                <Image className="transition-transform transform hover:-translate-y-1" src={forder_img} alt="폴더이미지" width={130} height={130}/>
                                <h3 className="text-lg font-bold">{category}</h3>
                        </Link>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}