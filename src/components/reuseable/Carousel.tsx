// import { FC, Fragment, ReactElement, useState } from 'react';
// import { Autoplay, Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

// // ==================================================================
// interface CarouselProps extends SwiperProps {
//   pagination?: boolean;
//   navigation?: boolean;
//   spaceBetween?: number;
//   slideClassName?: string;
//   children: ReactElement[];
//   slidesPerView?: number | 'auto';
// }
// // ==================================================================

// const Carousel: FC<CarouselProps> = ({
//   children,
//   slideClassName,
//   spaceBetween = 5,
//   slidesPerView = 3,
//   pagination = true,
//   navigation = true,
//   loop=true,
//   ...others
// }) => {
//   const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
//   const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
//   const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

//   return (
//     <Fragment>
//       <Swiper
//         spaceBetween={spaceBetween}
//         slidesPerView={slidesPerView}
//         modules={[Pagination, Navigation, Autoplay]}
//         navigation={navigation ? { prevEl, nextEl } : false}
//         pagination={pagination ? { clickable: true, el: paginationEl } : false}
//         {...others}
//       >
//         {children.map((slide, i) => (
//           <SwiperSlide className={slideClassName} key={i}>
//             {slide}
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="swiper-controls">
//         {/* custom navigation */}
//         {navigation && (
//           <div className="swiper-navigation">
//             <div role="button" ref={(node) => setPrevEl(node)} className="swiper-button swiper-button-prev" />
//             <div role="button" ref={(node) => setNextEl(node)} className="swiper-button swiper-button-next" />
//           </div>
//         )}

//         {/* custom pagination */}
//         {/* {pagination && <div className="swiper-pagination" ref={(node) => setPaginationEl(node)} />} */}
//       </div>
//     </Fragment>
//   );
// };

// export default Carousel;
import { FC, ReactElement } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-arrow slick-next" role="button" onClick={onClick}>
    ▶
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-arrow slick-prev" role="button" onClick={onClick}>
    ◀
  </div>
);

interface CarouselProps extends Omit<Settings, 'slidesToShow' | 'slidesToScroll'> {
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  slideClassName?: string;
  children: ReactElement[];
  slidesPerView?: number | 'auto';
}

const Carousel: FC<CarouselProps> = ({
  children,
  slideClassName,
  spaceBetween = 10,
  slidesPerView = 3,
  pagination = true,
  navigation = true,
  loop = true,
  autoplay = false,
  autoplaySpeed = 3000,
  adaptiveHeight= true,
  responsive,
  ...others
}) => {
  
  const settings: Settings = {
    dots: pagination,
    arrows: navigation,
    infinite: loop,
    autoplay,
    autoplaySpeed,
    cssEase: "linear",
    slidesToScroll: 1,
    nextArrow: navigation ? <NextArrow /> : undefined,
    prevArrow: navigation ? <PrevArrow /> : undefined,
    responsive,
    ...others,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {children.map((slide, i) => (
          <div
            key={i}
            className={slideClassName}
            style={{
              padding: `0 ${spaceBetween / 2}px`,
              margin: `0 ${spaceBetween / 2}px`,
              boxSizing: 'border-box',
            }}
          >
            {slide}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
