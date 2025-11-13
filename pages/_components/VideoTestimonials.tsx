"use client";
import Carousel from "components/reuseable/Carousel";
// import Plyr from 'plyr-react';
import ReactPlayer from 'react-player'

export const VideoTestimonials = () => {
  return (
    <div className="mb-10 swiper-container swiper-auto swiper-auto-xs mb-md-12" >
    <Carousel
      loop
      updateOnWindowResize
      speed={3000}
      autoplaySpeed={3000}
      spaceBetween={2}
      navigation={true}
      pagination={false}
      autoplay={true}
      slidesToShow={ 4}
      responsive= {[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
      wrapperClass="swiper-wrapper ticker"
      className="overflow-visible " 
      dir="rtl">
      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <div key={num} className="overflow-hidden shadow-xl rounded-xl ms-5 " >
        <ReactPlayer  key={num} style={{height:"300px"}}  className="w-auto h-full"
    src="https://www.youtube.com/watch?v=PtKPv6mOwow"
 
      />
      
        
        </div>
      ))}
    </Carousel>
    <Carousel
      loop
      updateOnWindowResize
      speed={3000}
      autoplaySpeed={3000}
      spaceBetween={2}
      navigation={true}
      pagination={false}
      autoplay={true}
      rtl={true}  
      slidesToShow={ 4}
      responsive= {[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
      wrapperClass="swiper-wrapper ticker"
      className="overflow-visible " 
      dir="ltr">
      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <div key={num} className="overflow-hidden shadow-xl rounded-xl ms-5 " >
        <ReactPlayer  key={num} style={{height:"250px"}}  className="w-auto h-full"
    src="https://www.youtube.com/watch?v=PtKPv6mOwow"
 
      />
      
        
        </div>
      ))}
    </Carousel>
  </div>
  );
};