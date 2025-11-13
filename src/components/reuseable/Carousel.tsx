
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
  loop?: boolean;
  updateOnWindowResize?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  adaptiveHeight?: boolean;
  responsive?: any;
  speed?: number;
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  pauseOnHover?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  initialSlide?: number;
  centerMode?: boolean;
  variableWidth?: boolean;
  wrapperClass?: string;
  dir?: string;
  grabCursor?: boolean;
  breakpoints?: any;
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
