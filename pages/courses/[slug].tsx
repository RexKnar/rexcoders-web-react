
import CourseHero from "components/blocks/hero/CourseHero";
import Breadcrumb from "components/reuseable/Breadcrumb";
import { useGetCourseDetailQuery } from "hooks/queries/training/useGetSingleTrainingDetailQuery";
import { NextPage } from "next"
import { useParams} from "next/navigation";
import { useEffect, useState } from "react";
import CourseDetails from "./_components/CourseDetail";

const CourseDetailPage: NextPage=()=>{
  const breadcrumb = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Shop', url: '/shop' },
    { id: 3, title: 'Cart', url: '/cart' } 
  ];

  


    return (
        <>
{/* <section
          className="text-white wrapper image-wrapper bg-image bg-overlay bg-overlay-400"
          style={{ backgroundImage: 'url(/img/illustrations/custom/courses/course-banner.svg)' }}
        >
          <div className="container pb-20 text-center pt-17 pt-md-19 pb-md-21">
            <div className="row">
              <div className=" col-lg-8">
                <h1 className="mb-3 text-white display-1">Get in Touch</h1>
                <Breadcrumb  data={breadcrumb}/>
              </div>
            </div>
          </div>
        </section> */}
        {
          
        }
        {/* <CourseHero /> */}
<section className="card">
<CourseDetails/>
</section>

        </>
    )
}



export default CourseDetailPage