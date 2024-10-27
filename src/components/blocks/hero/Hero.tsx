import { FC } from 'react';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';

import NextLink from 'components/reuseable/links/NextLink';

const Hero: FC = () => {
  
  return (
    <section className='container'>
      <div className='row'>

     
    <div className="card bg-soft-primary rounded-4 mt-15 col-lg-7">
      <div className="card-body p-md-10 py-xl-11 px-xl-8">
        <div className="row gx-lg-8  gy-10 align-items-center">
          <div className="text-justify col-lg-12 text-lg-start">
            <h1 className="mb-5 display-2" style={slideInDownAnimate('30ms')}>
            Embark on a Cosmic Journey Through the React Universe 
            </h1>

            <p className="lead fs-sm lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('290ms')}>
            Step into the future of front-end development! Join our stellar React workshop and explore the vast potential of React101. Get hands-on with the front-end library behind the world’s most dynamic web applications, and elevate your coding skills to cosmic levels.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start ">
              <span style={slideInDownAnimate('320ms')}>
                <NextLink title="Start Your Journey" href="#" className="btn btn-lg btn-primary rounded-pill me-2" />
              </span>

              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-5 order-lg-2 pt-15">
            <img
              alt="hero-image"
              src="/img/illustrations/custom/ignite-hero.svg"
              srcSet="/img/illustrations/custom/ignite-hero.svg 3x"
              className="mx-auto img-fluid ms-auto me-lg-8 "
              style={slideInDownAnimate('100ms')}
            />

          </div>
    </div>
    </section>
  );
};

export default Hero;
