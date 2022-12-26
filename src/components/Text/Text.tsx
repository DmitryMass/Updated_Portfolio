import { FC } from 'react';

interface ITextProps {
  children: React.ReactNode;
}
const Text: FC<ITextProps> = ({ children }) => {
  return (
    <p className='text-grayBlue sm:text-[28px] text-[18px] mb-[5px]'>
      {children}
    </p>
  );
};

export default Text;
