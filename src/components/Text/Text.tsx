import { FC } from 'react';

interface ITextProps {
  children: React.ReactNode;
  modificator?: string;
}
const Text: FC<ITextProps> = ({ children, modificator }) => {
  let styles = modificator
    ? modificator
    : `sm:text-[28px] text-[18px] mb-[5px]`;

  return <p className={`${styles} text-grayBlue `}>{children}</p>;
};

export default Text;
