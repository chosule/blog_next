import Profile from "@/components/About/Profile"
import Title from "@/components/Title"


export default function AboutPage() {
    return(
        <section className="flex flex-col gap-10 w-full">
            <Title subTitle={`안녕하세요. 반갑습니다. 😀 \n새로운 도전을 즐기며, 코드의 완성도를 높이는 것에 흥미가 있습니다.`}> </Title>
            <Profile/>
        </section>
    )
}