import { FC } from 'react';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';
import { Facts3 } from '../facts';
import CountUp from 'react-countup';
import { heroFacts } from 'data/facts';

const Hero: FC = () => {
  return (
    <>
      <section className="container pt-15">
        <div className="card bg-soft-primary rounded-4 ">
          <div className="card-body p-md-10 py-xl-11 px-xl-15">
            <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
              <div className="col-lg-6 order-lg-2 d-flex justify-content-center position-relative">
                <img
                  alt="hero-image"
                  src="/img/illustrations/custom/ignite-hero.svg"
                  srcSet="/img/illustrations/custom/ignite-hero.svg 3x"
                  className="img-fluid"
                  style={{ ...slideInDownAnimate('100ms'), maxWidth: '100%', height: 'auto' }}
                />
              </div>

              <div className="text-center col-lg-6 text-lg-start">
                <h1 className="mb-5 display-2" style={slideInDownAnimate('30ms')}>
                  Become a <span className="text-primary"> Job Ready </span> Software Developer{' '}
                </h1>
                <p className="lead fs-sm lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('290ms')}>
                  Practical, mentor-led programs <b>designed for college students and fresh graduates</b> who want to{' '}
                  <b>start a successful IT career.</b>
                </p>

                <div className="gap-3 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
                  <span style={slideInDownAnimate('390ms')}>
                    <NextLink title="Start Learning Today" href="#" className="btn btn-lg btn-primary rounded-pill" />
                  </span>
                  <span style={slideInDownAnimate('390ms')}>
                    <NextLink
                      title="Join Free Workshop"
                      href="#"
                      className="btn btn-lg btn-outline-primary rounded-pill"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 ">
        <div className="">
          <div className=" row align-items-center gy-4">
            {heroFacts.map(({ id, icon, color, title, description }, i) => (
              <div className="col-12 col-lg-4 col-md-6" key={id}>
                <div className="shadow-lg card">
                  <div className="p-5 card-body">
                    <div className="flex-row d-flex d-lg-block d-xl-flex">
                      <div>
                        <div className={`icon btn btn-circle btn-lg ${color} pe-none mx-auto me-3  mb-xl-0`}>
                          <i className={`uil ${icon}`} />
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-1 counter" style={{ fontSize: '18px' }}>
                          {title}
                        </h3>
                        <p className="mb-0" style={{ fontSize: '14px' }}>
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Facts3 /> */}
    </>
  );
};

export default Hero;
