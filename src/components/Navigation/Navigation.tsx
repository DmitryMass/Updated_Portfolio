import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='absolute top-[20px] bottom-0 left-[20px]'>
      <button
        onClick={() => navigate('/')}
        className='font-rubik sm:text-[34px] text-[26px] text-[#cda739] hover:scale-[1.1] transition-all duration-100 '
      >
        Back
      </button>
    </div>
  );
};

export default Navigation;
