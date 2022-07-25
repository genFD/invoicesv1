import React from 'react';
import { BarWave } from 'react-cssfx-loading';

const Loading = () => {
  return (
    <div className="loading-container min-h-[100vh] min-w-[375px] my-4 dark:bg-141625 flex justify-center items-center">
      <BarWave color="#7C5DFA" width="50px" height="50px" duration="1s" />
    </div>
  );
};

export default Loading;
