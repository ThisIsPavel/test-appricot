import { fetchProductById } from '@/entities/product/api/getProduct';
import ProductDetail from '@/entities/product/ui/ProductDetail';
import { notFound } from 'next/navigation';

interface Props {
  params: any; // Использован any, так как при явном указании типа PageProps ломалась build сборка для dynamic routes.
}

export default async function Product({ params }: Props) {
  try {
    const { slug } = await params;
    const product = await fetchProductById(slug);
    return <ProductDetail product={product} />;
  } catch {
    notFound();
  }
}
