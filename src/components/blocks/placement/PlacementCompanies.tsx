"use client";
import { FC } from 'react';
import FigureImage from 'components/reuseable/FigureImage';
// -------- data -------- //
import { companyList } from 'data/placement-companies';

import carouselBreakpoints from 'utils/carouselBreakpoints';
import Carousel from 'components/reuseable/Carousel';

const PlacementCompanies: FC = () => {
  return (
    <section className="pt-10 pb-8 wrapper bg-light">
      <div className="container ">
        <div className="text-center row">
          <div className="mx-auto col-md-11 col-lg-10 col-xxl-10">
            <h3 className="display-3 ls-sm mb-9 px-xl-11">
            Our graduates land jobs in top <span className="underline-3 style-2 green">tech companies</span> and promising <span className="underline-3 style-2 yellow">startups.</span>
       
            </h3>
          </div>
        </div>
        {/* <Carousel
              loop
              updateOnWindowResize
              speed={7000}
              spaceBetween={40}
              navigation={true}
              pagination={false}
              slidesPerView="auto"
              autoplay={{ delay: 1000 }}
              wrapperClass="swiper-wrapper ticker"
              className="overflow-visible "
              dir="rtl">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <Plyr key={num}  
                options={{ loadSprite: true, clickToPlay: true }}
                source={{ type: 'video', sources: [{ src: 'PtKPv6mOwow', provider: 'youtube' }] }}
              />
                // <figure className="shadow-xl rounded-xl" key={num}>
                //   <img src={`/img/photos/ma${num}.jpg`} srcSet={`/img/photos/ma${num}@2x.jpg 2x`} alt="" />
                // </figure>
              ))}
            </Carousel> */}
        <Carousel breakpoints={carouselBreakpoints} pagination={false}  navigation={false} loop={true} slidesPerView="auto"
              autoplay={{ delay: 1000 }}>
    {companyList.map((item) => (
                <div className="align-content-center col" key={item}>
                  <FigureImage width={450} height={301} src={item} className="m-auto w-15" />
                </div>
              )) } 
            
              
      </Carousel>
      </div>
    </section>
    
  
  );
};

export default PlacementCompanies;
