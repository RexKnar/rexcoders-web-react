import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const CTA: FC = () => {
  return (
    <section
      style={{ backgroundImage: 'url(/img/map.png)' }}
      className="text-center bg-auto wrapper image-wrapper no-overlay bg-image bg-map"
    >
      <div className="container pt-0 pb-14 pt-md-18 pb-md-18">
        <div className="row">
          <div className="mx-auto col-lg-10 col-xl-9 col-xxl-8">
            <h3 className="mb-8 display-4 px-lg-12">
            Start your IT career with Rexcoders <br/>Join Our Free Workshop
            </h3>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <NextLink href="#" title="Join Free Workshop" className="mx-1 rounded btn btn-primary" />
          <NextLink href="#" title="Book a 1:1 Career Call" className="mx-1 rounded btn btn-outline-green" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
