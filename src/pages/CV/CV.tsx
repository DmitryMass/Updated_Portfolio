import { FC, useState, Children, useEffect, useRef } from 'react';
import { useTrail, a } from '@react-spring/web';
import Summary from '@/components/Descriptions/Summary/Summary';
import JimmyCo from '@/components/JimmyCo/JimmyCo';
import Navigation from '@/components/Navigation/Navigation';
import Experience from '@/components/Descriptions/Experience/Experience';
import Skills from '@/components/Descriptions/Skills/Skills';
import Education from '@/components/Descriptions/Education/Education';
import SoftSkills from '@/components/Descriptions/SoftSkills/SoftSkills';
import Languages from '@/components/Descriptions/Languages/Languages';
import Certificate from '@/components/Descriptions/Certificate/Certificate';

import './cv.scss';

const Trail: FC<{ open: boolean; children: any }> = ({ open, children }) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 500 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className='trailsText' style={style}>
          <a.div className='h-full'>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const CV = () => {
  const [open, set] = useState(false);

  useEffect(() => {
    set(true);
  }, []);

  return (
    <div className='relative bg-black'>
      <div className=' max-w-[992px] px-[20px] mx-auto h-full w-full pt-[100px]'>
        <JimmyCo />
        <Navigation />
        <Trail open={open}>
          <Summary />
          <Experience />
          <Skills />
          <Education />
          <SoftSkills />
          <Languages />
          <Certificate />
        </Trail>
      </div>
      <section className='futurama__bgc' />
    </div>
  );
};
export default CV;
