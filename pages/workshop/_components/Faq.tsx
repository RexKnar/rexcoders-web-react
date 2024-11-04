import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
import { accordions } from 'data/demo-8';

const Faq: FC = () => {
  return (
    <div className="container">
      <div className="card bg-soft-primary rounded-4 mx-auto" style={{ maxWidth: '1500px' }}>
        <div className="card-body p-md-56 p-xl-8">
          <div className="row gx-lg-4 gy-4">
            <div className="col-lg-6">
              <h3 className="display-4 mb-3">Frequently Asked Questions</h3>
              <p className="lead fs-lg mb-0">
                If you don't see an answer to your question, you can send us an email from our contact form.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="accordion accordion-wrapper" id="accordionExample">
                {accordions.map((item) => (
                  <Accordion type="plain" key={item.no} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
