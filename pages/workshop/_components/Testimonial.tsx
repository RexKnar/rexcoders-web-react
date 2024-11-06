import TestimonialCard8 from "components/reuseable/testimonial-cards/TestimonialCard8";
import { testimonialList8 } from "data/testimonial-list";
import { FC, useState } from "react";


const Testimonial: FC = () => {

  return (
    <>

      <section id="snippet-8" className="wrapper bg-light ">
        <div className="container pt-15 pt-md-17 pt-lg-10 pb-10 pb-md-5 align-item-center">
          <div>
            <h2 className="display-4 text-center mb-8">Value your learning journey. Review past <br /> student feedback for informed choices</h2>
            <div className="grid">
              <div className="row isotope gy-5">

                {testimonialList8.map((testimonial) => (
                  <TestimonialCard8 key={testimonial.id}
                    name={testimonial.name}
                    rating={testimonial.rating}
                    review={testimonial.review}
                    fullReview={testimonial.fullReview}
                    image={testimonial.image} />
                ))}
              </div>

            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-10 pb-2">
            <button
              className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
              data-bs-toggle="modal"
              data-bs-target="#modal-signup"
            >
              Register Now!
            </button>
          </div>
        </div>

      </section >

    </>
  );
};

export default Testimonial;





