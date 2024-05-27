
import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';

import { Hero } from 'components/blocks/hero';
import { CareerSupport, TrainingModules } from 'components/blocks/services';
import { Footer } from 'components/blocks/footer';
import { GoogleTestimonial } from 'components/blocks/testimonial';
import { PlacementCompanies } from 'components/blocks/placement';
import { ShortCourseList } from 'components/blocks/courses';
import { LazyMotion } from 'framer-motion';
import { useGetCourseListQuery } from 'hooks/queries/training/useGetCourseListQuery';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
const [courseList, setCourseList]=useState<any[]>([]);
  const loadFeatures = () =>
    import("../src/utils/framer-motion-features/dom-max").then(res => res.default)
  
  const { data: courseListResponse, isLoading: isCourseListLoading } =
    useGetCourseListQuery({ page:1, limit: 999 });

    useEffect(() => {
      if (courseListResponse?.data) {
        setCourseList(courseListResponse.data);
      }
    }, [courseListResponse]);
  
  return (
    <>

      

      <main className="content-wrapper">
        <div className="container-fluid">
          <Hero />
          <TrainingModules />
          <ShortCourseList courseList={courseList}/>
          <CareerSupport />
          <GoogleTestimonial />
          <PlacementCompanies />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
