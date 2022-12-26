import { FC } from 'react';
import Title from '@/components/Title/Title';
import Subtitle from '@/components/Subtitle/Subtitle';
import Text from '@/components/Text/Text';

const Education: FC = () => {
  return (
    <div className='font-oswald mb-[40px]'>
      <Title>Education</Title>
      <div className='mb-[10px]'>
        <Subtitle>Front-End Education</Subtitle>
        <Text>
          Basic Course - Front End Basic (HTML/CSS/SCSS) 08.2021 - 11.2021
        </Text>
        <Text>
          In-depth course - Front End Pro (Advanced). JavaScript + React 12.2021
          - 06.2022
        </Text>
        <Text>Udemy: JavaScript + React (Ivan Petrichenko)</Text>
        <Text>Udemy: React + Redux (Juriy Bura)</Text>
        <Text>Udemy: Understanding TypeScript (Maximilian Schwarzmuller)</Text>
      </div>
      <div>
        <Subtitle>Main Education</Subtitle>
        <Subtitle>National Technical University Dnipro Polytechnic</Subtitle>
        <Text>
          2015-2019 Bachelor Degree Field of study Mining. Professional
          qualification "Specialist in the field of mining"
        </Text>
      </div>
    </div>
  );
};

export default Education;
