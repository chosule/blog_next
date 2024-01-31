'use client';
import Image from "next/image";
import profile_img from "public/profile_img.jpg"
import Text from "../Text";

export default function Profile() {
     return(
        <div className="grid md:grid-cols-[300px_1fr] gap-5">
                <div className="w-[200px] h-[200px] md:w-full md:h-full">
                    <Image className="rounded-2xl shadow-xl" src={profile_img} alt="프로필이미지" width={250} height={250} priority/>
                </div>
            <div>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-3 flex-col">
                        <h1 className="text-xl">Introduce</h1>
                        <div className="border"></div>
                        <Text>
                        안녕하세요. <br/>신입 프론트엔드 엔지니어 지원자 김초슬입니다. <br/>현재는 웹퍼블리셔로 재직중입니다. <br/>다른나라의 언어를 습득하듯이 학습으로 인한 저의 성장속에서 컴퓨터와 저의 대화가 점점 가까워 지는것이 보람차고 즐겁습니다. 어려워서 못하는게 아닌 동료들과의 활발한 커뮤니케이션을 통해 함께 문제를 해결하고 함께 성장하고싶습니다. <br/>새로운 배움은 언제나 즐겁고 새로운 생각은 저를 더 성장시킬수 있는 시작이라고 생각합니다.
                        </Text>
                    </div>
                    <div className="flex gap-3 flex-col">
                        <h1 className="text-xl">Skills</h1>
                        <div className="border"></div>
                        <p>텍스트 입력란 아직 미정</p>
                    </div>
                    <div className="flex gap-3 flex-col">
                        <h1 className="text-xl">Work Experience</h1>
                        <div className="border"></div>
                        <p>텍스트 입력란 아직 미정</p>
                    </div>
                    <div className="flex gap-3 flex-col">
                        <h1 className="text-xl">Side Project</h1>
                        <div className="border"></div>
                        <p>텍스트 입력란 아직 미정</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

