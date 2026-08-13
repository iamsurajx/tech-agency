// content/blogs/index.ts

import { buildSaasMvp } from "./build-saas-mvp-14-days";
// import { aiNativeProducts } from "./ai-native-products-d2c"; // Dusra blog aise add karenge

// Type definition for better TypeScript support
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  displayDate: string;
  readTime: string;
  imageGradient: string;
  author: string;
  content: string;
};

// Saare blogs ki ek Array
export const allBlogs: BlogPost[] = [
  buildSaasMvp,
  // aiNativeProducts, // Future blogs yahan add karte jayenge
];

// Ye function kisi ek slug ke base par specific blog return karega
export const getBlogBySlug = (slug: string) => {
  return allBlogs.find((blog) => blog.slug === slug) || null;
};