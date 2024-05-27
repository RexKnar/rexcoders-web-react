import { ShortCourseList } from "components/blocks/courses";
import { Navbar } from "components/blocks/navbar";
import Breadcrumb from "components/reuseable/Breadcrumb";
import CourseCard from "components/reuseable/course-cards/CourseCard";

export default function Courses() {

    const courseList = [
        {
            id: 1,
            photos: 5,
            category: 'Wedding',
            name: 'Front-End Development',
            technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
            image: { '1x': '/img/illustrations/custom/courses/front-end.svg', '2x': '/img/illustrations/custom/courses/front-end.svg 2x' }
        },
        {
            id: 2,
            photos: 5,
            category: 'Wedding',
            name: 'Front-End Development',
            technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
            image: { '1x': '/img/illustrations/custom/courses/front-end.svg', '2x': '/img/illustrations/custom/courses/front-end.svg 2x' }
        },
        {
            id: 3,
            photos: 5,
            category: 'Wedding',
            name: 'Front-End Development',
            technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
            image: { '1x': '/img/illustrations/custom/courses/front-end.svg', '2x': '/img/illustrations/custom/courses/front-end.svg 2x' }
        },
        {
            id: 4,
            photos: 5,
            category: 'Wedding',
            name: 'Front-End Development',
            technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
            image: { '1x': '/img/illustrations/custom/courses/front-end.svg', '2x': '/img/illustrations/custom/courses/front-end.svg 2x' }
        },
        {
            id: 5,
            photos: 5,
            category: 'Wedding',
            name: 'Front-End Development',
            technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
            image: { '1x': '/img/illustrations/custom/courses/front-end.svg', '2x': '/img/illustrations/custom/courses/front-end.svg 2x' }
        },
        {
            id: 6,
            photos: 5,
            category: 'Wedding',
            name: 'Front-End Development',
            technologies: ['html', 'css', 'javascript', 'react', 'angular', 'nodejs', 'mysql'],
            image: { '1x': '/img/illustrations/custom/courses/front-end.svg', '2x': '/img/illustrations/custom/courses/front-end.svg 2x' }
        },
    ];
    return (<>



      <main className="content-wrapper">
      <div className="container py-14 py-md-16">
            <div className="text-center row">
              <div className="mx-auto col-xl-10">
                <h1 className="mb-3 fs-15 text-uppercase text-primary">Job Positions</h1>
                <h3 className="mb-10 display-4 px-xxl-15">
                  We’re always searching for amazing people to join our team. Take a look at our current openings.
                </h3>
              </div>
            </div>
            </div>
      <section className='container'>
    <div className=" rounded-4 mt-15">
                <div className="row">
                    {
                        courseList.map((item, index) => (
                            <div className="mt-10 col-lg-3" key={index} >
                            <CourseCard {...item} />
                            </div>
                        ))
                        
                    }
                     {
                        courseList.map((item, index) => (
                            <div className="mt-10 col-lg-3" key={index} >
                            <CourseCard {...item} />
                            </div>
                        ))
                        
                    }
                     {
                        courseList.map((item, index) => (
                            <div className="mt-10 col-lg-3" key={index} >
                            <CourseCard {...item} />
                            </div>
                        ))
                        
                    }
                </div>
                </div>
            </section>


        </main>
    </>)
}