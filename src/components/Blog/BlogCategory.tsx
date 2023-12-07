import Image from "next/image"
import forder_img from "../../../public/folder_img.png"
import { Posts } from "@/service/getPosts";
import Link from "next/link";

type Props = {
    posts:Posts[]
}
export default async function BlogCategory({posts}:{posts:Props}) {
    return(
        <div className="my-20">
            <h1 className="text-4xl font-black italic">Blog</h1>
            <ul className="grid grid-cols-4">
                <Link href="" className="my-20 gap-4">
                    <div className="flex flex-col items-center">
                        <Image className="w-full transition-transform transform hover:-translate-y-1" src={forder_img} alt="폴더이미지" width={200} height={200}/>
                        <h3 className="text-lg text-center">임시 제목</h3>
                    </div>
                </Link>
                <Link href="" className="my-20 gap-4">
                    <div className="flex flex-col items-center">
                        <Image className="w-full transition-transform transform hover:-translate-y-1" src={forder_img} alt="폴더이미지" width={200} height={200}/>
                        <h3 className="text-lg text-center">임시 제목</h3>
                    </div>
                </Link>
                <Link href="" className="my-20 gap-4">
                    <div className="flex flex-col items-center">
                        <Image className="w-full transition-transform transform hover:-translate-y-1" src={forder_img} alt="폴더이미지" width={200} height={200}/>
                        <h3 className="text-lg text-center">임시 제목</h3>
                    </div>
                </Link>
                <Link href="" className="my-20 gap-4">
                    <div className="flex flex-col items-center">
                        <Image className="w-full transition-transform transform hover:-translate-y-1" src={forder_img} alt="폴더이미지" width={200} height={200}/>
                        <h3 className="text-lg text-center">임시 제목</h3>
                    </div>
                </Link>
            </ul>
        </div>
    )
}