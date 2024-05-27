import { FC } from 'react';
import { ServiceCard1 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { trainingFeaturesList } from 'data/service';

const TrainingFeatures: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container ">
        <div className="text-center row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="mb-3 fs-16 text-uppercase text-muted">What We Do?</h2>
            <h3 className="mb-10 display-4 px-xl-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="w-16 h-16 shape rounded-circle bg-soft-blue rellax"
            style={{ zIndex: 0, right: '-2.2rem', bottom: '-0.5rem' }}
          />

          <div
            className="w-16 shape bg-dot primary rellax h-17"
            style={{ zIndex: 0, top: '-0.5rem', left: '-2.2rem' }}
          />

          <div className="text-center row gx-md-5 gy-5">
            {trainingFeaturesList.map((item) => (
              <ServiceCard1
                key={item.id}
                Icon={item.icon}
                title={item.title}
                linkUrl={item.link}
                linkType={item.linkType}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingFeatures;
