
import type { NextPage } from 'next';


import { CareerSupport, TrainingModules } from 'components/blocks/services';
import { Footer } from 'components/blocks/footer';
import { ShortCourseList } from 'components/blocks/courses';
import { VideoTestimonials } from '../_components/VideoTestimonials';
import HowWeDoIt from '../_components/HowWeDoIt';
import TrustedHiringPartners from '../_components/TrustedHiringPartners';
import HomeTestimonialGrid from '../_components/HomeTestimonialGrid';
import HomeAbout from '../_components/HomeAbout';
import CTA from '../_components/CTA';
import Hero from './_components/data-analytics/Hero';
import { FAQ1 } from 'components/blocks/faq';
import FAQ from './_components/data-analytics/FAQ';
import Syllabus from './_components/data-analytics/Syllabus';

const DataAnalytics: NextPage = () => {
  const loadFeatures = () =>
    import("../../src/utils/framer-motion-features/dom-max").then(res => res.default)
  
  const courseList = [
    {
      id: 1,
      photos: 5,
      category: 'fullstack',
      name: 'AI-Enhanced Fullstack Development',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
      image: {
        '1x': '/img/illustrations/custom/courses/front-end.svg',
        '2x': '/img/illustrations/custom/courses/front-end.svg 2x'
      }
    },
    {
      id: 2,
      photos: 5,
      category: 'data-science',
      name: 'Next-Gen Data Analytics Program',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
      image: {
        '1x': '/img/illustrations/custom/courses/front-end.svg',
        '2x': '/img/illustrations/custom/courses/front-end.svg 2x'
      }
    },
    {
      id: 3,
      photos: 5,
      category: 'Wedding',
      name: 'Generative AI Engineer Program',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
      image: {
        '1x': '/img/illustrations/custom/courses/front-end.svg',
        '2x': '/img/illustrations/custom/courses/front-end.svg 2x'
      }
    },
    
  ];
  
  return (
    <>

      

      <main className="content-wrapper">
        <div className="container-fluid bg-soft-primary">
          <Hero />
          </div>
          <TrustedHiringPartners />
          <TrainingModules />
          
          <section className="wrapper">
            <div className="py-5 container-fluid py-md-10">
            <div className="text-center row">
          <div className="mx-auto col-md-10 col-lg-9 col-xxl-8">
            <h2 className="mb-3 fs-15 text-uppercase text-muted">Real Student Stories</h2>
            <h3 className="display-3 ls-sm mb-9 px-xl-11">
            Hear from our graduates about their <span className="underline-3 style-2 green">learning journey</span> and career success !
            </h3>
          </div>
        </div>
            <VideoTestimonials />
          </div>
          </section>
          
      

            <section className=" bg-soft-primary wrapper">
            <div className='mx-auto'>
                <div className="mx-auto my-auto col-lg-5 col-6 ms-auto col-xl-4 d-lg-flex">
            <div className="mx-auto flex-column d-flex img-mask mask-">
              <img src="/img/google-review.png"  srcSet="/img/google-review.png 2x" alt="" />
              </div>
          </div>
              </div>
              <div className='container pt-5 pb-1'>
              <HomeTestimonialGrid />
              
             
              </div>
              
            </section>
            <CareerSupport />
            <section className=' bg-soft-primary'>
              <div className='container pt-5 pb-1'>
              <Syllabus />
              </div>
            
            </section>
            
          <section className="wrapper">
          <div className="container py-5 py-md-10">
          <FAQ />
          </div>
          </section>
          <CTA />
          
      </main>
      <Footer />
    </>
  );
};

export default DataAnalytics;
