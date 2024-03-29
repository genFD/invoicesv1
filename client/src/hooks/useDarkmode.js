import { useEffect, useState } from 'react';

export default function useDarkmode() {
  // const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [theme, setTheme] = useState(localStorage.theme);
  // const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
