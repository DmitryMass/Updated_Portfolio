import { footer } from '@/styles/footerLinks';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './footerlinks.scss';

const FooterLinks: FC = () => {
  return (
    <>
      <div className={`footer__wrapper ${footer.wrapper}`}>
        <Link className={footer.link} to={'/cv'}>
          About
        </Link>
        <Link className={footer.link} to={'/portfolio'}>
          Portfolio
        </Link>
      </div>
    </>
  );
};

export default FooterLinks;
