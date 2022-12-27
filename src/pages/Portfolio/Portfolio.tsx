import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Autoplay } from 'swiper';
import BackBtn from '@/components/Navigation/Navigation';
import JimmyCo from '@/components/JimmyCo/JimmyCo';
import { IWorksGallery } from '@/types/types';
import worksGallery from '@/components/constants/constants';
import GalleryItem from '@/components/GalleryItem/GalleryItem';

import { portfolio } from '@/styles/portfolio';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './portfolio.scss';
import GitHubEtc from '@/components/GitHubEtc/GitHubEtc';

const Portfolio: FC = () => {
  return (
    <div className={portfolio.wrapper}>
      <JimmyCo />
      <BackBtn />
      <GitHubEtc />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        freeMode={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Autoplay, FreeMode]}
        className='mySwiper'
      >
        {worksGallery.map((item: IWorksGallery) => (
          <SwiperSlide key={item.id}>
            <GalleryItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
