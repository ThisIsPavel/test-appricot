import Toggle from '@/shared/ui/Toggle/Toggle';
import DarkThemeIcon from '../assets/Moon.svg';
import LightThemeIcon from '../assets/Sun.svg';
import { useTheme } from '../hooks/useTheme';
import { THEMES } from '@/shared/config/theme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-1.5">
      <LightThemeIcon />
      <Toggle isChecked={theme === THEMES.dark} onChange={toggleTheme} />
      <DarkThemeIcon />
    </div>
  );
}
