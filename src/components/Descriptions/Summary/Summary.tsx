import Text from '@/components/Text/Text';
import Title from '@/components/Title/Title';
import { FC } from 'react';

const Summary: FC = () => {
  return (
    <div className='mb-[40px] font-oswald'>
      <Title>Summary</Title>
      <Text>
        I am passionate junior front-end developer with a desire to learn and
        grow in the collaborative team environment. I am seeking for new
        opportunities and challenges that will expand my skill set and
        complement your company with a motivated specialist. I have commercial
        (3 months) and non-commercial experience in creating websites.
        Technologies used: React, Firebase, NodeJS, PostgreSQL etc.
      </Text>
    </div>
  );
};

export default Summary;
