
import Filter from 'components/common/Filter';
import CourseCard from 'components/reuseable/course-cards/CourseCard';
import { useEffect, useState } from 'react';

export default function Courses() {


  const courseList = [
    {
      id: 1,
      photos: 5,
      category: 'Wedding',
      name: 'Front-End Development',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
      image: {
        '1x': '/img/illustrations/custom/courses/front-end.svg',
        '2x': '/img/illustrations/custom/courses/front-end.svg 2x'
      }
    },
    {
      id: 2,
      photos: 5,
      category: 'Wedding',
      name: 'Front-End Development',
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
      name: 'Front-End Development',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
      image: {
        '1x': '/img/illustrations/custom/courses/front-end.svg',
        '2x': '/img/illustrations/custom/courses/front-end.svg 2x'
      }
    },
    {
      id: 4,
      photos: 5,
      category: 'Wedding',
      name: 'Front-End Development',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
      image: {
        '1x': '/img/illustrations/custom/courses/front-end.svg',
        '2x': '/img/illustrations/custom/courses/front-end.svg 2x'
      }
    },
    {
      id: 5,
      photos: 5,
      category: 'Wedding',
      name: 'Front-End Development',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
      image: {
        '1x': '/img/illustrations/custom/courses/front-end.svg',
        '2x': '/img/illustrations/custom/courses/front-end.svg 2x'
      }
    },
    {
      id: 6,
      photos: 5,
      category: 'Wedding',
      name: 'Front-End Development',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
      image: {
        '1x': '/img/illustrations/custom/courses/front-end.svg',
        '2x': '/img/illustrations/custom/courses/front-end.svg 2x'
      }
    }
  ];
  return (
    <>
      <main className="content-wrapper">
      <section className="wrapper bg-soft-primary pt-18">
          <div className="container pt-10 pb-10 text-center pt-md-8 pb-md-10">
            <div className="row">
              {/* <div className="mx-auto col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5">
                <h3 className="mb-3 display-5">About Re<span className="text-primary">x</span>coders</h3>
                <Breadcrumb data={[
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About', url: '/about' }
]} />
              </div> */}
              <div className="text-center row">
            <div className="mx-auto col-xl-10">
              <h1 className="mb-3 fs-15 text-uppercase text-primary">Job Positions</h1>
              <h3 className="mb-10 display-4 px-xxl-15">
                We’re always searching for amazing people to join our team. Take a look at our current openings.
              </h3>
            </div>
          </div>
            </div>
          </div>
        </section>
        {/* <div className="container py-14 py-md-16">
          <div className="text-center row">
            <div className="mx-auto col-xl-10">
              <h1 className="mb-3 fs-15 text-uppercase text-primary">Job Positions</h1>
              <h3 className="mb-10 display-4 px-xxl-15">
                We’re always searching for amazing people to join our team. Take a look at our current openings.
              </h3>
            </div>
          </div>
        </div> */}
        <section className="container">
            <div className='row'>
                <div className='mt-10 shadow-lg col-lg-3 rounded-4'>
                    <Filter />
                </div>
                <div className='col-lg-9'>
          <div className=" rounded-4">
            <div className="row">
              {courseList.map((item: any, index: number) => (
                <div className="mt-10 col-lg-4" key={index}>
                  <CourseCard {...item} />
                </div>
              ))}
              {courseList.map((item: any, index: number) => (
                <div className="mt-10 col-lg-3" key={index}>
                  <CourseCard {...item} />
                </div>
              ))}
              {courseList.map((item: any, index: number) => (
                <div className="mt-10 col-lg-3" key={index}>
                  <CourseCard {...item} />
                </div>
              ))}
            </div>
          </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
