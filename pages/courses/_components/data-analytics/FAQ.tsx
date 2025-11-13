import { FC, Fragment } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import { accordionList1 } from 'data/faq';

const FAQ: FC = () => {
    const analyticsFAQ=[
        [
          {
            no: 'One',
            expand: false,
            heading: 'Do I need prior coding experience?',
            body: `No. We start from basics in Excel & SQL and build up.`
          },
          {
            no: 'Two',
            expand: false,
            heading: 'How much time per week?',
            body: `10-12 hours on average.`
          },
          {
            no: 'Three',
            expand: false,
            heading: 'Will I get placement help?',
            body: `Yes — resume, LinkedIn, mock interviews and job referrals via our hiring network.`
          }
        ],
        [
          {
            no: 'Four',
            expand: false,
            heading: 'Is there a certificate?',
            body: `Yes — you’ll receive a Rexcoders Participation and Completion Certificate.`
          },
          {
            no: 'Five',
            expand: false,
            heading: 'Refund policy?',
            body: `We offer a 5-day refund policy for valid reasons, counted from your joining date—not from the days you attend classes.`
          },
          {
            no: 'Six',
            expand: false,
            heading: 'Will I get real project experience or just tool training?',
            body: `You’ll work on 4+ real-world projects — including sales dashboards, business KPI reports, and a capstone analytics case study.`
          }
        ]
      ]
  return (
    <Fragment>
      <h2 className="mb-3 text-center fs-15 text-uppercase text-muted">FAQ</h2>
      {/* <h3 className='display-3 ls-sm mb-9 px-xl-11'> */}
      <h3 className="mb-10 text-center display-4 px-lg-12 px-xl-15">
        Got Questions? We’ve Got Answers.</h3>
      {/* <h3 className="mb-10 text-center display-4 px-lg-12 px-xl-15">
        If you don't see an answer to your question, you can send us an email from our contact form.
      </h3> */}

      <div className="accordion-wrapper" id="accordion">
        <div className="row">
          {analyticsFAQ.map((items, i) => {
            return (
              <div className="col-md-6" key={i}>
                {items.map((item) => (
                  <Accordion key={item.no} {...item} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default FAQ;
