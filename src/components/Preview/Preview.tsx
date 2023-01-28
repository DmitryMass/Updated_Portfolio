import React, { FC, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

import './spline.scss';

const SplineLazy = React.lazy(() => import('@splinetool/react-spline'));

const Preview: FC = () => {
  return (
    <div className='relative w-full h-full bg-[#271F2E]'>
      <Suspense
        fallback={<div className='text-white absolute z-[600]'>Loading...</div>}
      >
        <SplineLazy
          className='spline__media absolute z-[500] top-0 right-0 m-0'
          scene='https://prod.spline.design/2I1PLDiUn3V2MGL7/scene.splinecode'
        />
      </Suspense>
    </div>
  );
};

export default Preview;
