import { siteConfig } from "../src/config";
import { getAllPosts } from "../src/service/postDataSet";
import fs, { writeFileSync } from "fs";
import path from "path";

const createSiteMap = async () => {
  const siteUrl = "https://chosule-blog.vercel.app";
  const posts = await getAllPosts();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.google.com/schemas/sitemap-xhtml/1.0" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
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

  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf-8");
};

const createRobotsTxt = () => {
  const siteUrl = siteConfig.url;
  const text = `
    User-agent: *
    Allow: /
    Sitemap: ${siteUrl}/sitemap.xml
    Host: ${siteUrl}
    `;
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  writeFileSync(path.join(publicDir, "robots.txt"), text.trim(), "utf-8");
};

(async () => {
  await createSiteMap();
  createRobotsTxt();
})();
