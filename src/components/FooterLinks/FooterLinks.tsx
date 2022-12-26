import { FC } from 'react';
import { Link } from 'react-router-dom';
import './footerlinks.scss';

const FooterLinks: FC = () => {
  return (
    <>
      <div className='footer__wrapper w-full px-[20px] flex gap-[15px] justify-center items-center'>
        <Link
          className='footer__link  py-[20px] px-[30px] text-[35px] uppercase font-oswald rounded-md'
          to={'/cv'}
        >
          About
        </Link>
        <Link
          className='footer__link  py-[20px] px-[30px] text-[35px] uppercase font-oswald  rounded-md'
          to={'/portfolio'}
        >
          Portfolio
        </Link>
      </div>
    </>
  );
};

export default FooterLinks;
