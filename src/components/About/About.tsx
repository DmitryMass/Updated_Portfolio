import { about } from '@/styles/about';
import { FC } from 'react';

const About: FC = () => {
  return (
    <div className={about.wrapper}>
      <h2 className={about.title}>
        I am passionate junior front-end developer with a desire to learn and
        grow in the collaborative team environment. I am seeking for new
        opportunities and challenges that will expand my skill set and
        complement your company with a motivated specialist. I have commercial
        (3 months) and non-commercial experience in creating websites.
        Technologies used: React, Firebase, NodeJS, PostgreSQL etc.
      </h2>
    </div>
  );
};

export default About;
