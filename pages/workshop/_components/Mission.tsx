import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';

const Mission: FC = () => {
  return (
    <section id="snippet-1" className="wrapper bg-light">
    <div className="container pt-10 pt-md-17 pb-13 pb-md-17 mb-lg-n22 mb-xl-n24">
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center">

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-muted mb-3">Your Features</h2>
        <h3 className="display-4 mb-7">Your Cosmic Mission</h3>

        <AccordionList />
      </div>
      <div className="col-lg-7">
        <figure>
          <img
            alt="choose us"
            className="w-auto"
            src="/img/illustrations/i6.png"
            srcSet="/img/illustrations/i6@2x.png 2x"
          />
        </figure>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Mission;

