import { FC, useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Name from '@/components/Name/Name';
import About from '@/components/About/About';
import ParralaxLogo from '@/components/ParralaxLogo/ParralaxLogo';
import FooterLinks from '@/components/FooterLinks/FooterLinks';

const Home: FC = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: '100%', height: '100%', background: 'gray' }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            background: '#2d2233',
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <About />
        </ParallaxLayer>
        {/* LOGO */}
        <ParralaxLogo />

        <ParallaxLayer offset={0} speed={0.1}>
          <Name />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '580px',
          }}
        >
          <FooterLinks />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
