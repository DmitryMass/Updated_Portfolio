import { FC } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
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

import './parralaxlogo.scss';

const ParralaxLogo: FC = () => {
  return (
    <>
      <ParallaxLayer
        offset={0.2}
        speed={-0.3}
        style={{ pointerEvents: 'none', zIndex: 10 }}
      >
        <img
          src={githubLogo}
          className='name__logo md:skew-y-[20deg] skew-y-0'
          style={{
            opacity: 0.2,
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.2}
        speed={-0.3}
        style={{ pointerEvents: 'none' }}
      >
        <img
          src={htmlLogo}
          style={{ width: '10%', marginLeft: '60%', opacity: 0.2 }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={jsLogo}
          style={{ display: 'block', width: '15%', marginLeft: '35%' }}
        />
        <img
          src={reactLogo}
          style={{ display: 'block', width: '10%', marginLeft: '15%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          src={nodeJsLogo}
          style={{ display: 'block', width: '20%', marginLeft: '20%' }}
        />
        <img
          src={sassLogo}
          style={{ display: 'block', width: '20%', marginLeft: '40%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={typeScriptLogo}
          style={{ display: 'block', width: '10%', marginLeft: '10%' }}
        />
        <img
          src={reduxLogo}
          style={{ display: 'block', width: '20%', marginLeft: '75%' }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.7} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={webpack}
          style={{ display: 'block', width: '20%', marginLeft: '60%' }}
        />
        <img
          src={postgresLogo}
          style={{ display: 'block', width: '15%', marginLeft: '10%' }}
        />
        <img
          src={vsc}
          style={{ display: 'block', width: '10%', marginLeft: '65%' }}
        />
      </ParallaxLayer>

      {/*  */}
      <ParallaxLayer offset={2.2} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={reactLogo}
          style={{ display: 'block', width: '10%', marginLeft: '80%' }}
        />

        <img
          src={cssLogo}
          style={{
            display: 'block',
            width: '10%',
            marginTop: '5%',
            marginLeft: '25%',
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.5}
        speed={-0.4}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <img src={githubLogo} style={{ width: '50%' }} />
      </ParallaxLayer>
    </>
  );
};

export default ParralaxLogo;
