import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import { accordionList2 } from 'data/faq';

// ============================================================
type Faq2Props = { titleColor?: 'primary' | 'muted' };
// ============================================================

const Faq: FC<Faq2Props> = ({ titleColor = 'primary' }) => {
  return (
    <section className="wrapper bg-soft-primary ">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-6 col-xxl-10 mx-auto text-center">
            <h3 className="display-4 mb-10 px-lg-12 px-xl-10 px-xxl-15">
             Frequently Asked Questions
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="accordion-wrapper" id="accordion">
              {accordionList2.map((item) => (
                <Accordion key={item.no} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
