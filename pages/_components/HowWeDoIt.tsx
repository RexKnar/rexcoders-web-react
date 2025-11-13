import { FC, Fragment } from 'react';
// -------- data -------- //
import { processList2 } from 'data/process';

const HowWeDoIt: FC = () => {
  return (
    <Fragment>
        <div className="text-center row">
          <div className="mx-auto col-md-10 col-lg-9 col-xxl-8">
            <h2 className="mb-3 fs-15 text-uppercase text-muted">How We Do It?</h2>
            <h3 className="display-3 ls-sm mb-9 px-xl-11">
            We make your spending <span className="underline-3 style-2 green">stress-free</span> for you to have the perfect control.
            {/* How you can get Benefited from <span className="underline-3 style-2 green">Rexcoders</span>! */}
            </h3>
          </div>
        </div>
      {/* <h2 className="mb-3 display-4">How We Do It?</h2>
      <p className="mb-8 lead fs-lg">
        We make your spending <span className="underline">stress-free</span> for you to have the perfect control.
      </p> */}

      <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
        {processList2.map(({ no, title, subtitle }, i) => {
          const iconColor = i === 1 ? 'btn-primary' : 'btn-soft-primary';

          return (
            <div className="col-md-6 col-lg-3" key={no}>
              <span className={`icon btn btn-circle btn-lg pe-none mb-4 ${iconColor}`}>
                <span className="number">{no}</span>
              </span>

              <h4 className="mb-1">{title}</h4>
              <p>{subtitle}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default HowWeDoIt;
