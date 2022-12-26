import { FC } from 'react';

import './contacts.scss';

const Contacts: FC = () => {
  return (
    <div className='w-full max-h-[70px] h-full absolute bottom-0'>
      <div className='flex items-center justify-center max-w-[260px] rounded-[20px] w-full h-full mx-auto gap-[20px] pt-[10px] pb-[20px]  '>
        <a
          href='https://telegram.me/Dmitry_Mass'
          target={'_blank'}
          className='contact__link bg-telegramLogo w-[50px] h-[50px] bg-cover block'
        ></a>
        <a
          href='https://www.linkedin.com/in/dmitry-moskalenko-69a19a226/'
          target={'_blank'}
          className='contact__link bg-linkedinLogo w-[50px] h-[50px] bg-cover block'
        ></a>
        <a
          href='mailto:yourhoneyparadise@gmail.com?subject=Feedback&body=Message"'
          target={'_blank'}
          className='contact__link bg-gmailLogo w-[50px] h-[50px] bg-cover block'
        ></a>
      </div>
    </div>
  );
};

export default Contacts;
