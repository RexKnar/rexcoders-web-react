import { FC } from 'react';


  type Testimonial8CardProps = {
    id?: number;            
    name: string;            
    rating: string;
    review: string;       
    image: string;       
  };

  const TestimonialCard8: FC<Testimonial8CardProps> = (props) => {
      const { name, rating, review, image } = props;
  
      return (
        
          <div className="item col-md-6 col-xl-4">
              <div className="card shadow-lg">
                  <div className="card-body">
                      <span className={`ratings ${rating} mb-3`}></span>
                      <blockquote className="icon mb-0">
                          <p>“{review}”</p>
                          <div className="blockquote-details">
                              <figure className="rounded-circle w-12 overflow-hidden">
                                  <img
                                      alt={name}
                                      loading="lazy"
                                      width="100"
                                      height="100"
                                      src={image}
                                  />
                              </figure>
                              <div className="info">
                                  <h5 className="mb-0">{name}</h5>
                                  
                              </div>
                          </div>
                      </blockquote>
                  </div>
              </div>
          </div>
      );
  };

  export default TestimonialCard8;