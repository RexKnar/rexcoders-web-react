import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import NextLink from 'components/reuseable/links/NextLink';
import { TeamCard2 } from 'components/reuseable/team-cards';

import teams from 'data/team-list';

const Mentor: FC = () => {
  return (
    <section id="snippet-2" className="wrapper bg-light ">
      <div className="container pt-15 pt-md-10 pb-13 pb-md-8 mb-n16 mb-md-n17 mb-xl-n20">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-16 mb-md-17 mb-xl-20 align-items-center">

          <div className="col-lg-8">
            <div className="swiper-container text-center mb-6">
              <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
                {teams.map((team) => (
                  <TeamCard2 key={team.id} {...team} />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="col-lg-4">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Meet Your  Commanders</h2>
            <h3 className="display-5 mb-5">Empowering You with Leaders Who Shape Success Beyond Tech.</h3>
            <p>
              Don’t wait—register now to secure your place in this cosmic adventure!

            </p>

            <NextLink title="Start Your Journey" href="#" className="btn btn-primary rounded-pill mt-3" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mentor;
