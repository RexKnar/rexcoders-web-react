import { FC } from 'react';
import Link from 'next/link';
import NextLink from '../links/NextLink';
import FigureImage from 'components/reuseable/FigureImage';

// ========================================================
type CourseDetailCArdProps = {
  link: string;
  title: string;
  image: string;
  category: string;
  description: string;
};
// ========================================================

// const CourseDetailCard: FC<CourseDetailCArdProps> = (props) => {
  const CourseDetailCard=()=>{
  // const { title, category, description, link, image } = props;

  return (
    <article className="fixed sticky item post" >
      <div className="card">
        <figure className="card-img-top overlay overlay-1 hover-scale">
          <Link href="#" passHref legacyBehavior>
            <a>
              <FigureImage width={560} height={350} src={'/img/photos/about13.jpg'} />
              {/* <img src="/img/photos/about13.jpg" srcSet="/img/photos/about13@2x.jpg 2x" alt="hero" /> */}
              <span className="bg" />
            </a>
          </Link>

          <figcaption>
            <h5 className="mb-0 from-top">Read More</h5>
          </figcaption>
        </figure>

        <div className="card-body">
          <div className="post-header">
            <div className="post-category text-line">
              <NextLink title={'category'} href="#" className="hover" />
            </div>

            <h2 className="mt-1 mb-3 post-title h3">
              <NextLink title={'title'} className="link-dark" href={'link'} />
            </h2>
          </div>

          <div className="post-content">
            <p>description</p>
          </div>
        </div>

        
      </div>
    </article>
  );
};

export default CourseDetailCard;
