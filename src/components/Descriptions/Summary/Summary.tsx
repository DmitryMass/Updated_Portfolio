import Text from '@/components/Text/Text';
import Title from '@/components/Title/Title';
import { FC } from 'react';

const Summary: FC = () => {
  return (
    <div className='mb-[40px] font-oswald'>
      <Title>Summary</Title>
      <Text>
        A passionate junior front-end developer with a strong desire to learn
        and thrive in a collaborative team setting. Eagerly pursuing fresh
        opportunities and challenges that will not only broaden my skill set but
        also bring a motivated specialist to your company. Backed by both
        commercial and non-commercial experience in website development.
      </Text>
    </div>
  );
};

export default Summary;
