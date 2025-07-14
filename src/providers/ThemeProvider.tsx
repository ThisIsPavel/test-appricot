import { ThemeProvider } from '@/features/theme-toggle/model/ThemeContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
