import { FC } from 'react';
import FigureImage from 'components/reuseable/FigureImage';
// -------- data -------- //
import { clientList2 } from 'data/client';
import { companyList } from 'data/placement-companies';
import NextLink from 'components/reuseable/links/NextLink';

const TrustedHiringPartners: FC = () => {
    const topSixCompanies = companyList.slice(0, 8);
  return (
    <section className="wrapper ">
      <div className="container pb-10 pt-14 pb-md-10 pt-md-14">
        <div className="mb-10 row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
          <div className="col-lg-4 mt-lg-2">
            <h3 className="mb-3 display-4 pe-xxl-5">Our Students Are <span className="underline-3 style-2 green">Now Working At</span></h3>
            <p className="mb-0 lead fs-lg pe-xxl-5">
            From small <span className="underline">startups to global MNCs</span>, our students are building real careers everywhere.
            {/* <span className="underline">Strong training and real projects </span> help our students get hired fast. */}
            </p>
            <NextLink title="View Placement Partners" href="#" className="mt-3 btn btn-outline-primary rounded-pill" />
          </div>

          <div className="col-lg-8">
            <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
              {topSixCompanies.map((item) => (
                <div className="align-content-center col" key={item}>
                  <FigureImage width={450} height={301} src={item} className="px-3 px-md-0 px-xxl-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedHiringPartners;
