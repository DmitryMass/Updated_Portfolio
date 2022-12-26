import { FC } from 'react';
import Text from '@/components/Text/Text';
import Title from '@/components/Title/Title';

const Languages: FC = () => {
  return (
    <div className='font-oswald mb-[40px]'>
      <Title>Languages</Title>
      <Text>English - Pre-Intermediate (A2)</Text>
      <Text>Ukrainian - Native</Text>
      <Text>Russian - Native</Text>
    </div>
  );
};

export default Languages;
