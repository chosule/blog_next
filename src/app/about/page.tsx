import Profile from "@/components/About/Profile"
import SubTitle from "@/components/SubTitle"
import { Metadata } from "next";

export const metadata: Metadata = {
    title:'About chosule',
    description: "저에 대해 소개합니다.",
};

export default function AboutPage() {
    return(
        <section className="flex flex-col gap-14 w-full">
            <SubTitle className="text-primary">안녕하세요. 반갑습니다. 😀 <br/>새로운 도전을 즐기며, 코드의 완성도를 높이는 것에 흥미가 있습니다.</SubTitle>
            <Profile/>
        </section>
    )
}