import { Post } from "@/service/getPostsNew"
import { FaCircleArrowRight,FaCircleArrowLeft } from "react-icons/fa6";

type Props ={
    type: "prev" | "next";
    post: Post;
}

export default function AdjacentPostCard({type, post:{title}}:Props) {
     return(
        <div>
            <div className={`flex w-80 bg-slate-100	gap-5 items-center ${type === "next" && "text-right"} p-5 rounded-lg	`}>
                <div className={`${type === "next" && "order-2"}`}>
                    {type === "prev" && <FaCircleArrowLeft style={{fontSize:"35px"}}/>}
                    {type === "next" && <FaCircleArrowRight style={{fontSize:"35px"}}/>}
                </div>
                <div>
                    <div>
                        {type === "prev" && "이전 포스트"}
                        {type === "next" && "다음 포스트"}
                    </div>
                    <h3 className="mt-0 truncate">{title}</h3>
                </div>
            </div>
        </div>
     )
}