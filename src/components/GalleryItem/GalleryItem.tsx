import { FC } from 'react';
import { portfolio } from '@/styles/portfolio';
import { IWorksGallery } from '@/types/types';
import Subtitle from '../Subtitle/Subtitle';
import Text from '../Text/Text';

import './galleryItem.scss';

interface IGalleryItemProps {
  item: IWorksGallery;
}

const GalleryItem: FC<IGalleryItemProps> = ({
  item: { description, githubLink, photo, projectLink, title },
}) => {
  return (
    <div className={`project__wrapper`}>
      <div className={`project__bgc ${photo}`}></div>
      <div className='project__info'>
        <div>
          <Subtitle modificator={portfolio.subtitle}>{title}</Subtitle>
          <Text modificator={portfolio.text}>{description}</Text>
        </div>
        <div>
          <a
            className={`${portfolio.link} mb-[15px]`}
            href={projectLink}
            target={'_blank'}
          >
            Project
          </a>
          <a className={portfolio.link} href={githubLink} target={'_blank'}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
