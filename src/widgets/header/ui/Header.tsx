'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/features/theme-toggle/ui/ThemeToggle';
import styles from './styles.module.css';

interface ILinks {
  href: string;
  text: string;
}

const links: ILinks[] = [
  { href: '/', text: 'Главная' },
  { href: '/about', text: 'О нас' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={`${styles.header} dark:bg-primary bg-white shadow-sm transition`}>
      <nav className="container mx-auto h-full px-4 py-4" aria-label="Навигация">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors dark:text-black ${
                  pathname === link.href
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:border-black dark:text-black'
                    : 'hover:text-hover-text text-gray-600 dark:text-white dark:hover:text-black'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
