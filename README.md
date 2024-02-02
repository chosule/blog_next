
## 💎 나만의 Blog 만들기 프로젝트
> **next 14 App router를 이용하여 저만의 블로그를 만들었습니다. 😀**  

### 1.설치 및 실행
```js
  npm i
  npm run dev
```

### 배포(Vercel)

[김초슬 블로그 보러가기](https://next-blog-delta-lac.vercel.app/) 🙋‍♀️

### 2.적용 기술
- 라이브러리 : react , typescript
- 프레임워크 : nextjs (App router)
- style : tailwindCss
- gsap, yup, nodemailer , 그 외 등등 사용

### 3.주요 기능 구현에 대한 간단 코멘트
    
3-1) **📝 Dynamic route를 사용하여 포스트 페이지 동적으로 구현 / mdx 파일 html코드로 바꾸기**
- 기존의 getStaticPath를 app router에서는 변경된 `generateStaticParams`를 이용해 ` 경로 path 설정을 동적`으로 변경하였습니다.
- 기존 getStaticProps를 `app router에서는 변경된 async와 await 로 구성한 함수`를 만들어(getPostsNew.tsx) 받아올 페이지를 구성하였습니다.
- 포스트를 작성할때는 mdx파일로 작성해야하기 때문에 `grayMatter를 이용하여 파싱`해주고 변환된 코드를 예쁘게 만들어준 뒤 , 이 mdx 파일들을 next-mdx-remote/rsc를 이용하여 `직렬화` 해주었습니다.

