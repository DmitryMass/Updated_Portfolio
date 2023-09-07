import { about } from '@/styles/about';
import { FC } from 'react';

const About: FC = () => {
  return (
    <div className={about.wrapper}>
      <h2 className={about.title}>
        A passionate junior front-end developer with a strong desire to learn
        and thrive in a collaborative team setting. Eagerly pursuing fresh
        opportunities and challenges that will not only broaden my skill set but
        also bring a motivated specialist to your company. Backed by both
        commercial and non-commercial experience in website development.
      </h2>
    </div>
  );
};

export default About;
