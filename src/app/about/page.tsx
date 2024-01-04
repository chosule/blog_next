import Profile from "@/components/About/Profile"
import TitleTexts from "@/components/TitleTexts"


export default function AboutPage() {
    return(
        <section className="flex flex-col gap-20 w-full">
            <TitleTexts title="chosule" subTitle={`안녕하세요. 반갑습니다. 😀 \n새로운 도전을 즐기며, 코드의 완성도를 높이는 것에 흥미가 있습니다.`}/>
            <Profile/>
        </section>
    )
}