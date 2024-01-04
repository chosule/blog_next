import { Post } from "@/service/getPostsNew"
import Link from "next/link";
import { IoArrowBackCircleOutline ,IoArrowForwardCircleOutline} from "react-icons/io5";

type Props ={
    type: "prev" | "next";
    post: Post;
}
const ICON_CLASSNAME = 'text-4xl transition-all hover:text-5xl';
export default function AdjacentPostCard({type, post:{title,slug}}:Props) {
     return(
        <div className={`flex w-80 bg-slate-100	gap-5 items-center ${type === "next" && "text-right justify-end"} p-3 rounded-lg`}>
            <Link href={`/${slug}`} className="flex items-center truncate gap-5 no-underline ">
                <div className={`${type === "next" && "order-2"}`}>
                    {type === "prev" && <IoArrowBackCircleOutline className={ICON_CLASSNAME} />}
                    {type === "next" && <IoArrowForwardCircleOutline className={ICON_CLASSNAME}/>}
                </div>
                <div>
                    <h3 className="mt-0 pre text-sm">
                        {type === "prev" && "이전 포스트"}
                        {type === "next" && "다음 포스트"}
                    </h3>
                    <h3 className="mt-0 text-base pre">{title}</h3>
                </div>
            </Link>
        </div>
    )
}