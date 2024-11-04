import TestimonialCard8 from "components/reuseable/testimonial-cards/TestimonialCard8";
import { testimonialList8 } from "data/testimonial-list";
import { FC, useState } from "react";


const Testimonial: FC = () => {

  return (
    <>

      <section id="snippet-8" className="wrapper bg-light wrapper-border">
        <div className="container pt-15 pt-md-17 pt-lg-0 pb-13 pb-md-15">
          <div>
            <h2 className="display-4 text-center mb-8">Value your learning journey. Review past <br /> student feedback for informed choices</h2>
            <div className="grid">
              <div className="row isotope gy-6">
                <div className="row">
                  {testimonialList8.map((testimonial) => (
                    <TestimonialCard8 key={testimonial.id} 
                    name={testimonial.name} 
                    rating={testimonial.rating} 
                    review={testimonial.review} 
                    image={testimonial.image} />
                  ))}
                </div>
                );
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
};

export default Testimonial;





