import ProductList from '@/features/product-list/ui/ProductList';
import styles from './styles.module.css';
import Title from '@/shared/ui/Title/Title';

export default function Home() {
  return (
    <main className={`${styles.main} bg-grey dark:bg-secondary px-3 transition md:px-6 lg:px-10`}>
      <Title variant="h1">Список продуктов</Title>
      <ProductList />
    </main>
  );
}
