import React, { FC } from 'react';

interface ISubtitleProps {
  children: React.ReactNode;
  modificator?: string;
}

const Subtitle: FC<ISubtitleProps> = ({ children, modificator }) => {
  let styles = modificator
    ? modificator
    : `sm:text-[28px] text-[20px] mb-[5px]`;
  return <h4 className={`text-goldYellow  ${styles}`}>{children}</h4>;
};

export default Subtitle;
