import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import CV from '@/pages/CV/CV';
import Portfolio from '@/pages/Portfolio/Portfolio';

const App: FC = () => {
  return (
    <div className='h-full w-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
