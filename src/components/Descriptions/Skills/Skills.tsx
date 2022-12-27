import { useEffect, useState } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';

import Title from '@/components/Title/Title';
import data from '@/components/constants/logo';
import './skills.scss';

const Skills = () => {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '100%', background: '#bab3d1' },
    to: {
      size: open ? '100%' : '100%',
      background: open ? '#bab3d1' : '#bab3d1',
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  useEffect(() => {
    let openInterval = setTimeout(() => {
      set(false);
    }, 7000);
    return () => clearTimeout(openInterval);
  }, [open]);

  return (
    <>
      <Title>Skills</Title>
      <div className='skills__wrapper'>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className='skills__container justify-items-center items-center'
          onClick={() => set((open) => !open)}
        >
          <span className='ml-[20px] text-black md:text-[28px] '>Click me</span>
          {transition((style, item) => (
            <animated.div
              className={`skills__item flex justify-center items-center  bg-grayBlue `}
              style={{ ...style }}
            >
              <img className='h-full' src={item.css} alt='' />
            </animated.div>
          ))}
        </animated.div>
      </div>
    </>
  );
};

export default Skills;
