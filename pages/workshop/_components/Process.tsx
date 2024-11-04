import { FC } from 'react';

import { processList7 } from 'data/process';

const Process: FC = () => {
  return (
    <section id="snippet-8" className="wrapper bg-light">
      <div className="container  pt-md-19 pb-xs-5 pb-13 pb-md-5 mb-n14 mb-md-n16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 pt-20 pt-md-2 mb-14 mb-md-16 align-items-center">
          <div className="col-lg-7 order-2 order-md-2 order-lg-1">
            <figure>
              <img className="w-80" src="/img/illustrations/i3.png" srcSet="/img/illustrations/i3@2x.png 2x" alt="" />
            </figure>
          </div>

          <div className="col-lg-5 order-lg-2">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Your Benefits</h2>
            <h3 className="display-5 mb-7 pe-xxl-5">Why Attend?</h3>

            {processList7.map(({ id, title, description, Icon }, i) => {
              const lastItem = i === processList7.length - 1;

              return (
                <div className={`d-flex flex-row ${lastItem ? 'mb-0' : 'mb-4'}`} key={id}>
                  <div>
                    <Icon />
                  </div>

                  <div>
                    <h4 className="mb-1">{title}</h4>
                    {/* <p className="mb-1">{description}</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
