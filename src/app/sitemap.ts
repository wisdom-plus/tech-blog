import type { MetadataRoute } from "next";
import { getSitemapPosts } from "@/api/microcms";

const routes = [
  "/",
  "/about",
  "/administrator",
  "/article",
  "/web",
  "/infra",
  "/design",
  "/license",
  "/meeting",
  "/private_policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site =
    process.env.NEXT_PUBLIC_SITE_DOMAIN ||
    process.env.NEXT_PUBLIC_SITE_DOMIN ||
    "https://techamply.com";
  const posts = await getSitemapPosts();

  return [
    ...routes.map((route) => ({ url: new URL(route, site).href })),
    ...posts.map((post) => ({
      url: new URL(`/article/${post.id}`, site).href,
      lastModified: post.published_at,
    })),
  ];
}
