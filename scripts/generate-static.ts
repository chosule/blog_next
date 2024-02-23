import { getAllPosts } from "../src/service/postDataSet";
import fs from "fs";

const createSiteMap = async () => {
  const siteUrl = "https://chosule-blog.vercel.app";
  const posts = await getAllPosts();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url><loc>${siteUrl}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>${siteUrl}/about</loc><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>${siteUrl}/posts</loc><changefreq>daily</changefreq><priority>0.7</priority></url>
    <url><loc>${siteUrl}/contact</loc><changefreq>daily</changefreq><priority>0.7</priority></url>
    ${posts
      ?.map(
        (post) =>
          `<url><loc>${siteUrl}/${post.slug}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>`
      )
      .join("\n")}
    </urlset>`;

  await fs.promises.writeFile("public/sitemap.xml", sitemap, {
    encoding: "utf-8",
  });
};

const createRobotsTxt = () => {
  const siteUrl = "https://chosule-blog.vercel.app";
  const text = `
    User-agent: *
    Allow: /
    Sitemap: ${siteUrl}/sitemap.xml
    Host: ${siteUrl}
    `;
};

(() => {
  createSiteMap();
})();
