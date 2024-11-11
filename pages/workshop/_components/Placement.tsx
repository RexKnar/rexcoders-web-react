import { FC } from 'react';
import FigureImage from 'components/reuseable/FigureImage';

import { clientList2 } from 'data/client';

const Placement: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pb-8 pb-lg-5 py-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
          <div className="col-lg-12 mt-lg-2">
            <h3 className="display-3 mb-3 pe-xxl-5 text-center">From Learners to Tech Leaders</h3>
            <p className="lead fs-lg mb-0 pe-xxl-7 text-center">Our graduates land jobs in top tech companies and promising startups</p>
          </div>

          <div className="col-lg-12">
            <div className="row row-cols-3 row-cols-md-4  pl-10 pt-lg-5 gx-0 gx-md-8 gx-xl-12 gy-12 align-items-center">
              {clientList2.map((item) => (
                <div className="col" key={item}>
                  <div className="d-flex justify-content-center align-items-center">
                    <FigureImage
                      width={450}
                      height={150}
                      src={item}
                      className="px-2 px-md-0 px-xxl-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
