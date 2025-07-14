import Title from '@/shared/ui/Title/Title';

export default function About() {
  const buildTime = new Date().toLocaleString();
  return (
    <main className="container mx-auto px-4 py-8 dark:text-white">
      <Title variant="h1">О нас</Title>
      <p className="text-base text-gray-500 sm:text-lg md:text-xl dark:text-white">
        Это тестовое приложение для демонстрации работы с Next.js
      </p>
      <p className="text-base text-gray-500 sm:text-lg md:text-xl dark:text-white">
        Страница сгенерирована в :<span className="font-bold">{buildTime}</span>
      </p>
    </main>
  );
}
