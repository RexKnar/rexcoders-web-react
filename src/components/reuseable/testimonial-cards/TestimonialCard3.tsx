import { FC } from 'react';
import Image from 'next/image';

// =================================================
type TestimonialCard3Props = {
  name: string;
  image: string;
  review: string;
  shadow?: boolean;
  designation: string;
  hideRating?: boolean;
};
// =================================================

const TestimonialCard3: FC<TestimonialCard3Props> = (props) => {
  const { name, image, review, designation, hideRating, shadow } = props;

  return (
    <div className={`card ${shadow ? 'shadow-lg' : ''}`}>
      <div className="card-body">
        {!hideRating && <span className="mb-3 ratings five" />}

        <blockquote className="mb-0 icon">
          <p>“{review}”</p>

          <div className="blockquote-details">
            <figure className="w-12 overflow-hidden rounded-circle">
              <img width={100} height={100} src={image} alt="team" style={{ width: '100%', height: 'auto' }} />
            </figure>

            <div className="info">
              <h5 className="mb-0">{name}</h5>
              <p className="mb-0"><small>{designation}</small></p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard3;
