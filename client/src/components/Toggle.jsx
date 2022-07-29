import React from 'react';
import { Dark, Light } from '../components';
import useDarkmode from '../hooks/useDarkmode';

const Toggle = () => {
  const [colorTheme, setTheme] = useDarkmode();
  return (
    <button
      onClick={() => {
        setTheme(colorTheme);
      }}
      className="desktop:w-full desktop:flex desktop:justify-center"
    >
      {colorTheme === 'light' ? <Dark /> : <Light />}
    </button>
  );
};
export default Toggle;
