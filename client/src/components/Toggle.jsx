import React, { useState } from 'react';
import { Dark, Light } from '../components';
import useDarkmode from '../hooks/useDarkmode';

const Toggle = () => {
  const [colorTheme, setTheme] = useDarkmode();
  return (
    <button
      onClick={() => {
        setTheme(colorTheme);
      }}
    >
      {colorTheme === 'light' ? <Dark /> : <Light />}
    </button>
  );
};
export default Toggle;
