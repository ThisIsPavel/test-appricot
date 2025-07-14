import { fetchProductById } from '@/entities/product/api/getProduct';
import ProductDetail from '@/entities/product/ui/ProductDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export default async function Product({ params }: PageProps) {
  try {
    const product = await fetchProductById(params.slug);
    console.log(product, 'product');
    return <ProductDetail product={product} />;
  } catch {
    notFound();
  }
}
