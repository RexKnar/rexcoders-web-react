import Carousel from "components/reuseable/Carousel";
import { FC, useState } from "react";
import carouselBreakpoints from "utils/carouselBreakpoints";

const Testimonial: FC = () => {
  const testimonialList = [
    {
      id: 1,
      name: 'Sheik Ali',
      rating: 'five',
      review: `I was looking out for the right place to build my skills in software developing to fulfill my long-standing desire`,
      fullReview: `I was looking out for the right place to build my skills in software developing to fulfill my long-standing desire to shift my career from education industry to IT industry. Finally, I have found and joined Rexcoders Coding Academy. The way of training given in this academy was very unique. I got excellent learning experience from Rexcoders coding academy. The best parts of training I admired and enjoyed in the academy are individual care to each student, conducting weekly technical games, and weekend technical sessions. It is the right place to build your career towards IT.`
    },
    {
      id: 2,
      name: 'Mafaz Malik',
      rating: 'five',
      review: `Rexcoders coding academy has knowledgeable and experienced instructors who can convey complex coding concepts `,
      fullReview: `Rexcoders coding academy has knowledgeable and experienced instructors who can convey complex coding concepts in a way that is easy to understand. It is the place where I developed myself in every aspect. We can develop our skills in many ways, but I developed my skills such as communication, deliverance, and so on here. Individual training is the best part I liked personally. Now I have the confidence to develop a web application.`
    },
    {
      id: 3,
      name: 'Aswin',
      rating: 'five',
      review: `Very good training academy. 1 to 1 teaching. Best academy for slow learner students, and for me, it is the best academy `,
      fullReview: `Very good training academy. 1 to 1 teaching. Best academy for slow learner students, and for me, it is the best academy I have seen before. The instructors are patient and really focus on the individual needs of each student, making it a great environment for learning.`
    }
  ];
  return (
    <>

      <section id="snippet-4" className="wrapper bg-light ">
        <div className="wrapper bg-light">
          <div className="container py-10 py-md-10">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
                <h2 className="fs-15 text-uppercase text-muted mb-3">Happy Learners</h2>
                <h3 className="display-4 mb-6 px-xl-10 px-xxl-10">Value your learning journey. Review past student feedback for informed choices</h3>
              </div>
            </div>
            <div className="swiper-container dots-closer mx-auto mb-6">
              <div className="swiper">
                <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
                  {testimonialList.map(({ id, name, rating, review, fullReview }) => {
                    const [isExpanded, setIsExpanded] = useState(false);

                    return (
                      <div className="swiper-slide w-auto" key={id}>
                        <div className="item-inner w-25">
                          <div className="card">
                            <div className="card-body">
                              <span className={`ratings ${rating} mb-3`}></span>
                              <blockquote className="mb-0 border-0 fs-lg">
                                <p>“{isExpanded ? fullReview : review}<span
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="btn-link" // Optionally, you can remove this class if you want it to be plain text
                            style={{ cursor: 'pointer' }}
                          >
                            {isExpanded ? '^' : '...'}
                          </span>”</p>
                                
                                <div className="blockquote-details">
                                  <div className="info">
                                    <p>- {name}</p> {/* Adjust title as needed */}
                                    
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
            <div className="swiper-controls">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
    

    </section >

    </>
  );
};

export default Testimonial;