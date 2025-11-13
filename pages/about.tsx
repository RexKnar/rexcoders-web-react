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
import { About25 } from 'components/blocks/about';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import AboutHero from './about/AboutHero';




const About: NextPage = () => {
  // used for hero area text change
  useReplaceMe();

  // use for show popup on the images
  useLightBox();

  return ( 
    <>
    

      {/* ========== header section ========== */}
   
      <main className="content-wrapper ">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary pt-18">
          <div className="container pt-10 text-center pb-10 pt-md-8 pb-md-10">
            <div className="row">
              <div className="mx-auto col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5">
                <h3 className="mb-3 display-5">About Re<span className="text-primary">x</span>coders</h3>
                <Breadcrumb data={[
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About', url: '/about' }
]} />
              </div>
            </div>
          </div>
        </section>
        
      <div className='container '>
        <AboutHero/>
        
       
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default About;
