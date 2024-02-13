/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://chosule-blog.vercel.app",
  generateRobotsTxt: true, // (optional)
};

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "http://localhost:8088", // .게시하는 site의 url
  generateRobotsTxt: true, // robots.txt generate 여부 (자동생성 여부)
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL}/post-sitemap.xml`,
    ],
  }, // robots.txt 옵션 설정
};
