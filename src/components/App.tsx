import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import CV from '@/pages/CV/CV';
import './App.css';

const App: FC = () => {
  return (
    <div className='h-full w-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/portfolio' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
