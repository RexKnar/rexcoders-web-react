import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'components/reuseable/links/NextLink';
import { ServiceCard3 } from 'components/reuseable/service-cards';
// -------- data -------- //


const AboutHero: FC = () => {
    const processList12 = [
        {
          no: '1',
          title: 'Learn by Doing',
          description: 'Empowering students through hands-on, practical, project-based learning.'
        },
        {
          no: '2',
          title: 'Tech for All',
          description: 'Making quality tech education accessible to every learner, regardless of background or location.'
        },
        {
          no: '3',
          title: 'Built for Careers',
          description: 'Equipping students with the skills, tools, and support they need to land real jobs in tech.'
        },
        {
          no: '4',
          title: 'Stronger Together',
          description: 'Fostering a collaborative community where students learn, build, and grow as a team.'
        }
      ];
      
  return (
    <section id="about">
      <div className="wrapper ">
        <div className="container py-14 py-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
              <div className="img-mask mask-2">
                <Image
                  width={1000}
                  height={850}
                  src="/img/illustrations/custom/about-vector-01.svg"
                  alt=""
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <p className="lead  display-5">
              “Wisdom is the most important thing, so make sure to get it. And along with wisdom, make sure you also gain understanding.”
              </p>
              <p>
              Welcome to RexCoders, where we're not just teaching code, but shaping futures. It's more than just lines of code; it's about empowering individuals and unlocking the doors to a world of endless possibilities in IT field. Our mission is support 1 million students to become the next generation of coders, and we're here to help you achieve that dream.
              </p>
              <p>
              At RexCoders we prioritizes flexibility and personalized guidance to empower individuals to become proficient in the tech industry. We also aims to bridge the skill gap between students and industrial expectations. Our only goal is to make tech education easy and available to everyone, especially those in tier-2 and tier-3 cities, regardless of their educational background.
              </p>


            </div>
          </div>

          <div className="row gx-md-8 gx-xl-12 mt-10 mt-md-13">
            <div className="col-lg-4">
              <h2 className="display-5 mb-3">Our Core Values</h2>
              <p>
              What we believe in and what drives everything we do. The foundation of how we teach, support, and empower future tech leaders.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row gy-6 gx-md-8 gx-xl-12">
                {processList12.map(({ no, ...item }) => (
                  <div className="col-md-6" key={no}>
                    <ServiceCard3
                      {...item}
                      Icon={
                        <span className="icon btn btn-circle btn-primary pe-none me-4">
                          <span className="number fs-18">{no}</span>
                        </span>
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
