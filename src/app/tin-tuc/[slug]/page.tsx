import BlogDetailPage from "@/pages/BlogDetailPage";


import { blogPosts } from '@/data/blog';
export async function generateStaticParams() {
  return blogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }));
}

export default function BlogDetail() {
  return <BlogDetailPage />
}