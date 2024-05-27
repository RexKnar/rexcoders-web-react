"use client"

import { useGetCourseDetailQuery } from "hooks/queries/training/useGetSingleTrainingDetailQuery";
import { useParams } from "next/navigation";
import { FC } from "react"
import { slideInDownAnimate } from "utils/animation";
import CourseDetailCard from 'components/reuseable/course-cards/CourseDetailCard';


 const  CourseDetails: FC = () => {
    const searchParams = useParams<{slug:string}>();
    const slug = searchParams?.slug??'' ; 
  
  console.log(slug);
   
  
    const { data: courseDetailResponse, isLoading: isCourseDetailLoading } =
    useGetCourseDetailQuery(slug);

    
    
    
    return(
        <>
        <section className="mt-12 wrapper bg-dark angled lower-start">
      <div className="container pb-8 pt-7 pt-md-11">
        <div className="row gx-0 gy-10 align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-4 text-white display-1" style={slideInDownAnimate('600ms')}>
              
              <span className="text-primary ">
                {courseDetailResponse?.trainingName}
              </span>
            </h1>

            <p
              className="text-justify text-white lead fs-16 lh-sm mb-7 pe-md-18 pe-lg-0 pe-xxl-15"
              style={{...slideInDownAnimate('900ms'), textAlign:"justify"}} 
            >
             {courseDetailResponse?.shortNote}
            </p>

            <div style={slideInDownAnimate('1200ms')}>
              <a className="rounded btn btn-lg btn-primary">Get Started</a>
            </div>
          </div>

          <div className="sticky col-lg-5 offset-lg-1 mb-n18" data-cues="slideInDown">
            
            <CourseDetailCard />
          </div>
          
        </div>
      </div>
    </section>
        <div>
    <h1>{courseDetailResponse?.trainingName}</h1>
</div>
<div style={ { height : "200px", width: `100vw`}} >
    demo

</div>
</>
    )
}

export default CourseDetails;