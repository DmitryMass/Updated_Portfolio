import React, { FC } from 'react';

interface ISubtitleProps {
  children: React.ReactNode;
}

const Subtitle: FC<ISubtitleProps> = ({ children }) => {
  return (
    <h4 className='text-goldYellow sm:text-[28px] text-[20px] mb-[5px]'>
      {children}
    </h4>
  );
};

export default Subtitle;
