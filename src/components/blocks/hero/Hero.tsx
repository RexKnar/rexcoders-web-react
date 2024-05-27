import { FC } from 'react';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';

import NextLink from 'components/reuseable/links/NextLink';

const Hero: FC = () => {
  
  return (
    <section className='container'>
    <div className="card bg-soft-primary rounded-4 mt-15 ">
      <div className="card-body p-md-10 py-xl-11 px-xl-15">
        <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
          <div className="col-lg-6 order-lg-2 d-flex position-relative">
            <img
              alt="hero-image"
              src="/img/illustrations/custom/ignite-hero.svg"
              srcSet="/img/illustrations/custom/ignite-hero.svg 3x"
              className="mx-auto img-fluid ms-auto me-lg-8"
              style={slideInDownAnimate('100ms')}
            />

          </div>

          <div className="text-center col-lg-6 text-lg-start">
            <h1 className="mb-5 display-2" style={slideInDownAnimate('30ms')}>
            Ignite Your Passion for Tech with <span className="text-primary">Rexcoders </span>
            </h1>

            <p className="lead fs-sm lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('290ms')}>
            Embark on a transformative journey and unlock your potential in the world of technology with Rexcoders Academy.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('320ms')}>
                <NextLink title="Explore Now" href="#" className="btn btn-lg btn-primary rounded-pill me-2" />
              </span>

              <span style={slideInDownAnimate('390ms')}>
                <NextLink title="Book a 1:1" href="#" className="btn btn-lg btn-outline-primary rounded-pill" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
