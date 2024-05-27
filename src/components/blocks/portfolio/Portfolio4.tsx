import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { portfolioList3 } from 'data/portfolio';

const Portfolio4: FC = () => {
  return (
    <section className="wrapper bg-soft-aqua">
      <div className="overflow-hidden ">
        <div className="container py-14 py-md-16">
          <div className=" row">
            <div className="mx-auto text-center col-lg-9 col-xl-8 col-xxl-7">
              <i className="opacity-25 icn-flower text-leaf fs-30"></i>
              <h2 className="mt-2 mb-10 text-center display-5">
                Some of wonderful love stories <br className="d-none d-md-block" /> I witnessed and had the chance to
                capture
              </h2>
            </div>
          </div>

          <div className="text-center swiper-container grid-view nav-bottom nav-color mb-14">
            <Carousel
              pagination={false}
              className="pb-2 overflow-visible"
              breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
            >
              {portfolioList3.map((item) => (
                <div className="shadow-lg card" key={item.id}>
                  <figure className="card-img-top overlay overlay-1">
                    <Link href="#" passHref legacyBehavior>
                      <a>
                        <img className="img-fluid" src={item.image['1x']} srcSet={item.image['2x']} alt="" />
                        <span className="bg" />
                      </a>
                    </Link>

                    <figcaption>
                      <h5 className="mb-0 from-top">View Gallery</h5>
                    </figcaption>
                  </figure>

                  <div className="p-6 card-body">
                    <h3 className="mb-1 fs-21">{item.name}</h3>
                    <ul className="mb-0 post-meta fs-16">
                      <li>{item.photos} Photos</li>
                      <li>{item.category}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio4;
