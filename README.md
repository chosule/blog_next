
## 💎 나만의 Blog 만들기 프로젝트
> **next 14 App router를 이용하여 저만의 블로그를 만들었습니다. 😀**  

### 1.설치 및 실행
```js
  npm i
  npm run dev
```

### 2.배포(Vercel)

[김초슬 블로그 보러가기](https://chosule-blog.vercel.app/) 🙋‍♀️
계속 작업하고있는 중이여서 미완성인점 양해 부탁드립니다.

### 3.적용 기술
- 라이브러리 : react , typescript
- 프레임워크 : nextjs (App router)
- style : tailwindCss
- gsap, yup, nodemailer , 그 외 등등 사용

### 4.주요 기능 구현에 대한 간단 코멘트

1. mdx 파일 들을 html 코드로 파싱 하였습니다.
2. 기존 다이나믹 라우터의 경로를 지정해주는 getStaticPaths를 14버전 App router에서 변경된 generateStaticParams의 기능을 사용하여 빌드시 경로를 정적으로 생성해 주었습니다.
3. postDataSet.tsx 에서  원하는 post들을 가져오기 위해 async await 비동기처리하여 프로그래밍한뒤에 다른곳에서 사용할 수 있도록 모듈화하였습니다. 
4. Next dynamic을 이용하여 useState로 dark와 light로 상태값을 저장해준뒤 동적으로 변경해 다크모드를 구현하였습니다.
5. Next metadata 를 사용하여 SEO에 최적화하였고 sitemap.xml 을 직접작성 한뒤 tsconfig.node.json파일을 생성하여 빌드시 추가할 수 있도록 설정하였습니다. 현재 구글sitemap에 등록 되어있습니다.
---

### ✨ 추가기능 및 이슈 수정 log
(2024.02.16) - sitemap.xml 수동으로 만들고 tsconfig.node.json 파일 생성, 빌드시 추가할수 있도록 설정.  
(2024.03.28) - 목차 배너 생성
