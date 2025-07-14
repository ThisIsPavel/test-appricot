import { useContext } from 'react';
import { ThemeContext } from '../model/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error();
  return context;
};
