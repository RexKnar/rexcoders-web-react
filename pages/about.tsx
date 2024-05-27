import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import useReplaceMe from 'hooks/useReplaceMe';

import useLightBox from 'hooks/useLightBox';
import { Hero} from 'components/blocks/hero';
import { CareerSupport, TrainingFeatures, TrainingModules } from 'components/blocks/services';
import { Footer } from 'components/blocks/footer';
import { Process } from 'components/blocks/process';




const About: NextPage = () => {
  // used for hero area text change
  useReplaceMe();

  // use for show popup on the images
  useLightBox();

  return ( 
    <>
    

      {/* ========== header section ========== */}
   
      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 text-center pb-19 pt-md-14 pb-md-20">
            <div className="row">
              <div className="mx-auto col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5">
                <h1 className="mb-3 display-1">Get in Touch</h1>
                {/* <Breadcrumb data={breadcrumb} /> */}
              </div>
            </div>
          </div>
        </section>
        <div className="wrapper bg-light angled upper-end">
      <div className='container angled upper-end'>
        {/* ========== hero section ========== */}
        {/* <Hero /> */}
        
        <CareerSupport />
        <Process />
        <TrainingFeatures />
        </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default About;
