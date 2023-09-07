import { FC } from 'react';
import Title from '@/components/Title/Title';

const Certificate: FC = () => {
  return (
    <div className='font-oswald mb-[100px]'>
      <Title>Certificate</Title>
      <a
        className='text-grayBlue text-[28px] mb-[5px] block underline'
        target={'_blank'}
        href='https://certificate.ithillel.ua/view/50462790'
      >
        Front-End Basic (HTML / CSS)
      </a>
      <a
        className='text-grayBlue text-[28px] mb-[5px] block underline'
        target={'_blank'}
        href='https://certificate.ithillel.ua/ru/view/86466421'
      >
        Front-End Advanced (JavaScript / React)
      </a>
      <a
        className='text-grayBlue text-[28px] mb-[5px] block underline'
        target={'_blank'}
        href='https://www.englishdom.com/ua/cn/3e929783/'
      >
        English Course
      </a>
    </div>
  );
};

export default Certificate;
