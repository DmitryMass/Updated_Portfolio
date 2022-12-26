import { FC } from 'react';

interface ITitleProps {
  children: React.ReactNode;
}

const Title: FC<ITitleProps> = ({ children }) => {
  return (
    <h2 className='text-blue text-[34px] mb-[5px] font-rubik'>{children}</h2>
  );
};

export default Title;
