import React from 'react';

const Avatar = () => {
  return (
    <div className="w-96 grid place-content-center desktop:h-[86px]">
      <img
        src="/assets/image-avatar.jpg"
        alt=""
        className=" w-8 h-8 rounded-full"
      />
    </div>
  );
};

export default Avatar;
