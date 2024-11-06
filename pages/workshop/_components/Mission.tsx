import { FC, Fragment } from 'react';
import { ServiceCard3 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList6 } from 'data/service';

const Mission: FC = () => {
  return (
    <Fragment>
      <section id="snippet-7" className="wrapper bg-light">
        <div className="container pt-15 pt-md-6 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <div className="row text-center mt-xl-12">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">
              {/* <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2> */}
              <h3 className="display-4 mb-9  ">
                Your Cosmic Mission
              </h3>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-8 mb-14 mb-md-17 mb-lg-13 ">
            {serviceList6.map(({ Icon, color, ...item }) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <ServiceCard3 {...item} Icon={<Icon className={`icon-svg-sm text-${color} me-4`} />} />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center pb-5">
            <button
              className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
              data-bs-toggle="modal"
              data-bs-target="#modal-signup"
            >
              Register Now!
            </button>
          </div>

        </div>
      </section>
    </Fragment>

  );
};

export default Mission;
