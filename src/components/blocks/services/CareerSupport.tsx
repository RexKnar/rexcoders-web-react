import { FC } from 'react';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import { ServiceCard4 } from 'components/reuseable/service-cards';
// -------- data -------- //

import color from 'utils/color';
import Shield from 'icons/lineal/Shield';
import Insurance from 'icons/lineal/Insurance';
import Browser from 'icons/lineal/Browser';
import Team from 'icons/lineal/Team';

const CareerSupport: FC = () => {
  const placementServices=[ {
    id: 1,
    Icon: Browser,
    color: color.yellow,
    title: 'Resume Building',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5 offset-md-1 align-self-end',
    description: 'Get personalized guidance to craft a clear, professional resume and cover letter that highlights your skills, projects, and strengths effectively.'
  },
  {
    id: 2,
    Icon: Shield,
    color: color.red,
    title: 'LinkedIn Profile Optimization',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-6 align-self-end',
    description: 'We’ll help you optimize your LinkedIn profile to showcase your work, improve visibility to recruiters, and build a strong professional identity online.'
  },
  {
    id: 3,
    Icon: Insurance,
    color: color.leaf,
    title: 'Mock Interviews',
    cardColor: 'bg-pale-leaf',
    columnClass: 'col-md-5',
    description: 'Practice and improve through mock interviews conducted by industry professionals from top companies, helping you gain confidence and interview readiness.'
  },
  {
    id: 4,
    Icon: Team,
    color: color.primary,
    title: 'Job Referral Network',
    cardColor: 'bg-pale-primary',
    columnClass: 'col-md-6 align-self-start',
    description: 'We go beyond training by helping you get noticed by the right employers. Through our trusted referral network of hiring partners, you’ll have priority access to real job and internship opportunities in the IT industry.'
  }];
 
  return (
    <section >
    <div className="container wrapper ">

    <div className="mt-0 row gx-lg-8 gx-xl-12 gy-10 mb-xl-12 align-items-center">
      <div className="flex-row col-lg-5">
        <div>
        <img
              alt="demo"
              // src="/img/photos/co3.png"
              src="/img/illustrations/custom/career_support.svg"
              srcSet="/img/illustrations/custom/career_support.svg 3x"
              className="mx-auto img-fluid ms-auto me-lg-8"
             
            />
        </div>
        <div>
        <h2 className="mb-3 fs-15 text-uppercase text-muted"></h2>
        <h3 className="mb-5 display-4">Your Career Launchpad</h3>
        <p>
        {/* We don't just get you job-ready, we empower you to conquer your job hunt and shine in interviews. */}
        We don’t just make you job-ready, we help you stand out and succeed in interviews and real hiring situations.
        </p>
        <NextLink title="Book a 1:1 Career Call" href="#" className="mt-3 btn btn-navy rounded-pill" />
        </div>
      </div>
      <div className="col-lg-7 ">
        <div className="row gx-md-5 gy-5">
          {placementServices.map(({ id, Icon, color, ...item }) => (
            <ServiceCard4 key={id} Icon={<Icon className={`icon-svg-md text-${color} mb-3`} />} {...item} />
          ))}
        </div>
      </div>

      
    </div>
    </div>
    </section>
  );
};

export default CareerSupport;
