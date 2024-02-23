module.exports = {
  siteUrl: "https://chosule-blog.vercel.app", // .게시하는 site의 url
  generateRobotsTxt: true, // robots.txt generate 여부 (자동생성 여부)
  robotsTxtOptions: {
    // 추가 sitemap 설정
    additionalSitemaps: [
      "https://chosule-blog.vercel.app/app/post-sitemap.xml",
    ],
  }, // robots.txt 옵션 설정
};
