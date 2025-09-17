import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://liftoff-three-rose.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://liftoff-three-rose.vercel.app/demo",
      lastModified: new Date(),
    },
  ];
}
