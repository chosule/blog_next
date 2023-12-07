import Image from "next/image";
import profile_img from "public/profile_img.jpg"

export default function Profile() {
     
     return(
        <div className="flex flex-col gap-24 w-full">
            <h1 className="text-4xl font-bold italic">김초슬 🖐 — Frontend</h1>
            <div className="flex items-center justify-evenly">
                <Image className="rounded-full shadow-xl" src={profile_img} alt="프로필이미지" width={230} height={230} priority/>
                <div>
                    <h1>텍스트 입력란 아직 미정</h1>
                    <h1>텍스트 입력란 아직 미정</h1>
                    <h1>텍스트 입력란 아직 미정</h1>
                    <h1>텍스트 입력란 아직 미정</h1>
                </div>
            </div>
            <div className="flex gap-3 flex-col">
                <h1 className="text-xl font-bold">Introduce 👉</h1>
                <p>텍스트 입력란 아직 미정</p>
            </div>
            <div>
                <h1 className="text-xl font-bold">Skills 👉</h1>
                <p>텍스트 입력란 아직 미정</p>
            </div>
            <div>
                <h1 className="text-xl font-bold">Work Experience 👉</h1>
                <p>텍스트 입력란 아직 미정</p>
            </div>
            <div>
                <h1 className="text-xl font-bold">Side Project 👉</h1>
                <p>텍스트 입력란 아직 미정</p>
            </div>
        </div>
     )
}

