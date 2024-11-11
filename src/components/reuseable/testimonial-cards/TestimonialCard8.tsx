import { FC, useState } from 'react';

type Testimonial8CardProps = {
    id?: number;
    name: string;
    designation: string;
    rating: string;
    review: string;
    fullReview: string; // The full review text
    image: string;
};

const TestimonialCard8: FC<Testimonial8CardProps> = ({ name,designation, rating, review, fullReview, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle the expanded state
    const toggleReviewText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="item col-md-6 col-xl-4 pb-1">
            <div className="card shadow-lg">
                <div className="card-body">
                    <span className={`ratings ${rating} mb-3`}></span>
                    <blockquote className="icon mb-0">
                        <p className="review-text"style={{textAlign:'justify'}}>"
                            {isExpanded ? fullReview : review}
                            <span
                                onClick={toggleReviewText}
                                className="show-more-text"
                                role="button"
                                tabIndex={0} // Add tabindex for better accessibility (clickable element)
                            >
                                {isExpanded ? '' : '...'}
                            </span>"
                        </p>
                        <span
                            onClick={toggleReviewText}
                            className="show-more-text"
                            role="button"
                            tabIndex={0} // Add tabindex for better accessibility (clickable element)
                        >
                            {isExpanded ? (
                                <>
                                   <i className="uil uil-angle-up"style={{ marginRight: '8px' }}></i> 
                                    show less
                                </>
                            ) : ''}
                        </span>
                        <div className="blockquote-details pt-2">
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
                                <p className="mb-0">{designation}</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard8;
