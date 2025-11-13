'use client'

import { FC } from 'react';
import Link from 'next/link';
import Carousel from 'components/reuseable/Carousel';
import { BE_BASE_URL } from 'utils/constants/config';
import CourseCard from 'components/reuseable/course-cards/CourseCard';


function  ShortCourseList ({courseList}:any){



  return (
    <section className="wrapper bg-soft-aqua">
      <div className="overflow-hidden ">
        <div className="container py-10 py-md-12">
          <div className=" row">
            <div className="mx-auto text-center col-lg-12 col-xl-12 col-xxl-12">
            <h2 className="mb-3 fs-15 text-uppercase text-muted">Our Popular Courses</h2>
            <h3 className="display-3 ls-sm mb-9 px-xl-0">
            Our courses are <span className="underline-3 style-2 yellow">tailored</span> for individuals passionate about tech, regardless of their <span className="underline-3 style-2 green">educational background.</span>
       
            </h3>
            </div>
          </div>

          <div className="text-center swiper-container grid-view nav-bottom nav-color mb-14">
        <div className='row'>
              {courseList.map((item:any) => (
                <div className="mt-10 col-lg-4" key={item.id}>
                <CourseCard {...item} />
              </div>
              ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortCourseList;
