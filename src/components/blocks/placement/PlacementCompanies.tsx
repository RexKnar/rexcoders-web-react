import { FC } from 'react';
import FigureImage from 'components/reuseable/FigureImage';
// -------- data -------- //
import { companyList } from 'data/placement-companies';

import carouselBreakpoints from 'utils/carouselBreakpoints';
import Carousel from 'components/reuseable/Carousel';

const PlacementCompanies: FC = () => {
  return (
    <section className="wrapper bg-light pb-13">
      <div className="container ">
        <div className="text-center row">
          <div className="mx-auto col-md-11 col-lg-10 col-xxl-10">
            <h3 className="display-3 ls-sm mb-9 px-xl-11">
            Our graduates land jobs in top <span className="underline-3 style-2 green">tech companies</span> and promising <span className="underline-3 style-2 yellow">startups.</span>
       
            </h3>
          </div>
        </div>

        <Carousel breakpoints={carouselBreakpoints} autoplay={true} navigation={false} loop={true}>
    {companyList.map((item) => (
                <div className="col" key={item}>
                  <FigureImage width={450} height={301} src={item} className="m-auto w-15" />
                </div>
              ))}
      </Carousel>
      </div>
    </section>
    
  
  );
};

export default PlacementCompanies;
