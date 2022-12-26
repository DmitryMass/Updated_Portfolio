import { useEffect, useState } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';

import './skills.scss';

import htmlLogo from '@/assets/icons/html.svg';
import jsLogo from '@/assets/icons/js.svg';
import nodeJsLogo from '@/assets/icons/nodejs.svg';
import typeScriptLogo from '@/assets/icons/typescript-logo.svg';
import sassLogo from '@/assets/icons/sass.svg';
import reduxLogo from '@/assets/icons/redux.svg';
import reactLogo from '@/assets/icons/react.svg';
import webpack from '@/assets/icons/webpack.svg';
import githubLogo from '@/assets/icons/github.svg';
import vsc from '@/assets/icons/vsc.svg';
import postgresLogo from '@/assets/icons/postgresql.svg';
import cssLogo from '@/assets/icons/css.svg';
import figmaLogo from '@/assets/icons/figma.svg';
import firebaseLogo from '@/assets/icons/firebase.svg';
import mongoLogo from '@/assets/icons/mongodb.svg';
import Title from '@/components/Title/Title';

const data: any = [
  {
    css: `${htmlLogo}`,
  },
  {
    css: `${cssLogo}`,
  },
  {
    css: `${sassLogo}`,
  },
  {
    css: `${jsLogo}`,
  },
  {
    css: `${reactLogo}`,
  },
  {
    css: `${reduxLogo}`,
  },
  {
    css: `${typeScriptLogo}`,
  },
  {
    css: `${nodeJsLogo}`,
  },
  {
    css: `${postgresLogo}`,
  },
  {
    css: `${firebaseLogo}`,
  },
  {
    css: `${mongoLogo}`,
  },
  {
    css: `${webpack}`,
  },
  {
    css: `${vsc}`,
  },
  {
    css: `${githubLogo}`,
  },
  {
    css: `${figmaLogo}`,
  },
];

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
