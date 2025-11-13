"use client";
import Carousel from "components/reuseable/Carousel";
import { FC } from "react";
// import Plyr from 'plyr-react';
import ReactPlayer from 'react-player'

 const VideoTestimonials : FC = () => {
  const videoList= ['https://www.youtube.com/watch?v=PtKPv6mOwow','https://www.youtube.com/watch?v=7FCvJMTFPMI', 'https://www.youtube.com/watch?v=O4fuIMF9u2k', 'https://www.youtube.com/watch?v=-kJ3po7zcvE']
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
      {videoList.map((num,index) => (
        <div key={index} className="overflow-hidden shadow-xl rounded-xl ms-5 " >
        <ReactPlayer  key={num} style={{height:"300px"}}  className="w-auto h-full"
    src={num}
 
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
      {videoList.map((num,index) => (
        <div key={index} className="overflow-hidden shadow-xl rounded-xl ms-5 " >
        <ReactPlayer  key={num} style={{height:"300px"}}  className="w-auto h-full"
    src={num}
 
      />
      
        
        </div>
      ))}
    </Carousel>
  </div>
  );
};


export default VideoTestimonials;