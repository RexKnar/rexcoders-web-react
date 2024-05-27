import { FC } from 'react';
// -------- data -------- //
import { processList5 } from 'data/process';

const Process4: FC = () => {
  return (
    <div className="wrapper bg-soft-primary">
      <div className="container py-14 pt-md-16 pt-lg-0 pb-md-16">
        

        <div className="mt-12 text-center row">
          <div className="mx-auto col-lg-9">
            <h2 className="mb-3 fs-15 text-uppercase text-muted">Our Process</h2>
            <h3 className="mb-0 text-center display-4 px-xl-10 px-xxl-15">
              Find out everything you need to know about creating a business process model
            </h3>

            <div className="text-center row gx-lg-8 gx-xl-12 process-wrapper mt-9">
              {processList5.map(({ title, subtitle, Icon, color }) => (
                <div key={title} className="col-md-4">
                  {<Icon className={`icon-svg-md text-${color} mb-3`} />}
                  <h4 className="mb-1">{title}</h4>
                  <p>{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process4;
