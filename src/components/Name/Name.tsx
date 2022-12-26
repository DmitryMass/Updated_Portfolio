import { FC, useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import JimmyCo from '../JimmyCo/JimmyCo';

import './name.scss';
import Contacts from '../Contacts/Contacts';

const Name: FC = () => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg) ',
      color: '#9b93c2',
    },
    enter: [
      { opacity: 1, height: 90, innerHeight: 90 },
      { transform: 'perspective(600px) rotateX(180deg)', color: 'white' },
      { transform: 'perspective(300px) rotateX(0deg)', color: 'white' },
    ],
    leave: [
      { color: '#9b93c2' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: 'white' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(['Front-End', 'Ukrainian', 'Developer']), 1000)
    );
    ref.current.push(setTimeout(() => set(['Front-End', 'Developer']), 3500));
    ref.current.push(
      setTimeout(() => set([`Hi, I'm Dmitry`, 'Front-End', 'Developer']), 5500)
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div className='relative h-full w-full font-oswald main__bgc'>
      <JimmyCo />
      <div className='name__wrapper h-full w-full flex items-center justify-end '>
        <div className='max-w-[900px] w-full my-0 skew-y-0 md:skew-y-[20deg]'>
          {transitions(({ innerHeight, ...rest }, item) => (
            <animated.div
              className={`transitionsItem`}
              style={rest}
              onClick={reset}
            >
              <animated.div
                className='name__item'
                style={{
                  overflow: 'hidden',
                  height: innerHeight,
                }}
              >
                {item}
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
      <Contacts />
    </div>
  );
};

export default Name;
