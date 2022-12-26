import { FC } from 'react';
import { Link } from 'react-router-dom';
import './footerlinks.scss';

const FooterLinks: FC = () => {
  return (
    <>
      <div className='footer__links w-full px-[20px] flex gap-[10px] justify-center items-center'>
        <Link
          className='text-[#2d2233] py-[20px] px-[30px] text-[35px] uppercase font-oswald bg-slate-200 rounded-md'
          to={'/cv'}
        >
          About
        </Link>
        <Link
          className='text-[#2d2233] py-[20px] px-[30px] text-[35px] uppercase font-oswald bg-slate-200 rounded-md'
          to={'/portfolio'}
        >
          Portfolio
        </Link>
      </div>
    </>
  );
};

export default FooterLinks;
