import { FC } from 'react';
import Text from '@/components/Text/Text';
import Title from '@/components/Title/Title';
import Subtitle from '@/components/Subtitle/Subtitle';

const Experience: FC = () => {
  return (
    <div className='font-oswald mb-[40px]'>
      <div>
        <Title>Experience</Title>
        <Subtitle>Junior Front-End Developer</Subtitle>
        <Subtitle>Freelance with coach September 2022 - December 2022</Subtitle>
        <Text>
          - Collaborated with the coach to design new features for web
          application
        </Text>
        <Text>
          - Created an interactive map and chat for clients. Stack React /
          Typescript / Redux-Toolkit / Firebase / Mapbox
        </Text>
        <Text>
          - Maintenance of code, debugging and solving client/server side
          problems
        </Text>
      </div>
      <div className='mt-[25px]'>
        <Subtitle>Sales expert / Acting director</Subtitle>
        <Subtitle>Company LLC 'ALLO' 03.2019 - 02.2022</Subtitle>
        <Text>- Sale of non-food products</Text>
        <Text>Interview of new employees</Text>
        <Text>
          {' '}
          Work with goods, cash registers, deliveries, processing of documents,
          invoices, etc
        </Text>
      </div>
    </div>
  );
};

export default Experience;
