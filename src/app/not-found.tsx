import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-4 text-9xl font-bold text-indigo-600">404</h1>
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">Страница не найдена</h2>
        <p className="mb-6 text-gray-600">Извините, запрашиваемая страница не существует или была перемещена.</p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
