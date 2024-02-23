"use client";
import Image from "next/image";
import profile_img from "public/profile_img.jpg";
import Text from "../Text";
import Stack from "./Stack";
import ProfileContent from "./ProfileContent";

export default function Profile() {
  return (
    <div className="grid gap-5 md:grid-cols-[300px_1fr]">
      <div className="h-[200px] w-[200px] md:h-full md:w-full">
        <Image
          className="rounded-2xl shadow-xl"
          src={profile_img}
          alt="프로필이미지"
          width={250}
          height={250}
          priority
        />
      </div>
      <div>
        <div className="flex flex-col gap-8">
          <ProfileContent>
            <Text className="leading-8">
              {`안녕하세요.\n신입 프론트엔드 엔지니어 지원자 김초슬입니다.\n현재는 웹퍼블리셔로 재직중입니다.\n다른나라의 언어를 습득하듯이 학습으로 인한 저의 성장속에서 컴퓨터와 저의 대화가 점점 가까워 지는것이 보람차고 즐겁습니다. \n동료들과의 활발한 커뮤니케이션을 통해 함께 문제를 해결하고 함께 성장하고싶습니다. 새로운 배움은 언제나 즐겁고 새로운 생각은 저를 더 성장시킬수 있는 시작이라고 생각합니다.`}
            </Text>
          </ProfileContent>
        </div>
      </div>
    </div>
  );
}
