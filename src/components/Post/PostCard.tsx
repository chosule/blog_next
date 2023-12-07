import { Posts } from "@/service/getPosts"
import Image from "next/image"
import Link from "next/link"
import { CiCalendarDate } from "react-icons/ci";

type Props = {
    post:Posts
}

export default function PostCard({post :{path,date,image,title}}:Props) {
     
     return(
        <Link href={`/posts/${path}`}>
            <Image src={`/featureImg/${image}`} alt="feature이미지" width={200} height={150} className="w-full rounded-t-lg	"/>
            <div className="flex flex-col gap-4 p-5">
                <div className="flex items-center gap-2">
                    <CiCalendarDate/>
                    <h3 className="text-sm">{date}</h3>
                </div>
                <h3 className="font-bold fext-2xl">타이틀{title}</h3>
            </div>
        </Link>
     )
}