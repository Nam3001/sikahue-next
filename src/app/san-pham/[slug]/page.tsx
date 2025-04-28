import ProductDetailPage from "@/pages/ProductDetailPage";

import { products } from '@/data/products';
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetail() {
  return <ProductDetailPage />
}