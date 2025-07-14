import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/widgets/header/ui/Header';
import { Providers } from '@/providers/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Header />
          <main className="main bg-grey dark:bg-secondary px-3 transition md:px-6 lg:px-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
