import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import Typewriter from 'typewriter-effect';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
import CourseDetailCard from 'components/reuseable/course-cards/CourseDetailCard';

const CourseHero: FC = () => {
  // used for lightbox
  useLightBox();

  return (
    <section className="mt-12 wrapper bg-dark angled lower-start">
      <div className="container pb-8 pt-7 pt-md-11">
        <div className="row gx-0 gy-10 align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-4 text-white display-1" style={slideInDownAnimate('600ms')}>
              Sandbox focuses on <br />
              <span className="text-primary text-nowrap">
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                    strings: ['customer satisfaction', 'business needs', 'creative ideas']
                  }}
                />
              </span>
            </h1>

            <p
              className="text-white lead fs-24 lh-sm mb-7 pe-md-18 pe-lg-0 pe-xxl-15"
              style={slideInDownAnimate('900ms')}
            >
              We carefully consider our solutions to support each and every stage of your growth.
            </p>

            <div style={slideInDownAnimate('1200ms')}>
              <a className="rounded btn btn-lg btn-primary">Get Started</a>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 mb-n18" data-cues="slideInDown">
            {/* <div className="position-relative" style={slideInDownAnimate('0ms')}>
              <a
                data-glightbox
                href="/media/movie.mp4"
                className="mx-auto mb-6 btn btn-circle btn-primary btn-play ripple position-absolute"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 3 }}
              >
                <i className="icn-caret-right" />
              </a>

              <figure className="rounded shadow-lg">
                <img src="/img/photos/about13.jpg" srcSet="/img/photos/about13@2x.jpg 2x" alt="hero" />
              </figure>
              
            </div> */}
            <CourseDetailCard />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
