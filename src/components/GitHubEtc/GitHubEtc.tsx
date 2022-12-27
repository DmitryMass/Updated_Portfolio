import { FC } from 'react';

const GitHubEtc: FC = () => {
  return (
    <div className='flex justify-center items-center absolute max-w-[250px] w-full h-[50px] bottom-0 mx-auto '>
      <a
        className='text-white py-[5px] px-[10px] shadow-[0_0_0_1px_white] rounded-md  hover:text-blue transition-all duration-250 ease-linear hover:transition-all hover:duration-150 hover:ease-linear animate-bounce font-oswald'
        target={'_blank'}
        href='https://github.com/DmitryMass'
      >
        GitHub Profile
      </a>
    </div>
  );
};

export default GitHubEtc;
