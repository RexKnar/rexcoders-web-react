'use client'

import { FC } from 'react';
import Link from 'next/link';
import Carousel from 'components/reuseable/Carousel';
import { BE_BASE_URL } from 'utils/constants/config';


const ShortCourseList: FC = ({courseList}:any) => {



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
            <Carousel
              pagination={false}
              className="pb-2 overflow-visible gx-2"
              breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 4 } }}
            >
              {courseList.map((item:any) => (
                <div className="m-2 shadow-lg card" key={item.trainingId}>
                  <figure className="card-img-top overlay overlay-1">
                    {/* <Link href={{
            pathname: '/courses/[slug]',
            query: { slug: item.trainingSlug },
          }} passHref legacyBehavior> */}
                      
                        <img className="img-fluid" src={BE_BASE_URL+item.imageUrl}  alt="" />
                        <span className="bg" />
                     
                    {/* </Link> */}

                    {/* <figcaption>
                      <h5 className="mb-0 from-top">View Details</h5>
                    </figcaption> */}
                  </figure>

                  <div className="p-6 pt-0 card-body">
                    <h4 className="mb-1 fs-21">{item.trainingName}</h4>
                    <ul className="mb-0 post-meta fs-16">
                        { 
                            item.technologies.map((tech:any,index:number)=>
                                {
                                    return (<li key={index}><img className="w-5 img-fluid" src={BE_BASE_URL+tech.imageUrl} alt="" /></li>)
})
                        }
                    </ul>
                    <ul className="mb-0 post-meta fs-16">
                      {/* <li>{item.photos} Photos</li> */}
                      {/* <li>{item.category}</li> */}
                    </ul>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortCourseList;
