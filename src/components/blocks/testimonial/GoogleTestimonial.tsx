import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';



const GoogleTestimonial: FC = () => {
  const testimonialList = [
    {
      id: 1,
      name: 'Sheik Ali',
      rating: 'five',
      review: `I was looking out for the right place to build my skills in software developing to fulfill my long-standing desire to shift my career from education industry to IT industry. Finally I have found and joined Rexcoders Coding Academy. The way of training given in this academy was very unique. I got excellent learning experience from Rexcoders coding academy. The best parts of trainings I admired and enjoyed in the academy are Individual care to each student, conducting weekly technical Games, weekend technical sessions. It is a Right place to build your carrier towards IT.`
    },
    {
      id: 2,
      name: 'Mafaz Malik',
      rating: 'five',
      review: `Rexcoders coding academy has knowledgeable and experienced instructors who can convey complex coding concepts in a way that is easy to understand. It is the place where I developed myself in every aspect. We can develop our skills in many ways, but I developed my skills such as communication, deliverance, and so on here. Individual training is the best part I liked personally.
      Now I have the confidence to develop a Web application.`
    },
    {
      id: 3,
      name: 'Aswin',
      rating: 'five',
      review: `Very good training academy.1 to 1 teaching. Best academy for slow learner student and for me it is the best academy which I seen before.`
    }
  ];
  
  return (
    <section className='container-fluid bg-soft-primary wrapper rounded-4'>
    <div className="">
      <div className="">
      

        <div className="row gx-lg-8 gx-xl-12 align-items-center">
          <div className="mx-auto my-auto col-lg-5 col-6 ms-auto col-xl-4 d-lg-flex">
            <div className="flex-column d-flex img-mask mask-">
              <img src="/img/google-review.png"  srcSet="/img/google-review.png 2x" alt="" />
              <a href="https://www.google.com/search?q=rexcoders&oq=rexcoders&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMgYIARBFGDwyFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAMQRRg9MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGEGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3b0455ee63d50f97:0x8a38b79d1146805b,1,,,," className='mx-auto'>View more on Google</a>
            </div>
          </div>
{/* 
          <div className="col-lg-6 col-xl-6 col-xxl-5 me-auto">
            <div className="mb-6 swiper-container dots-start dots-closer">
              <Carousel grabCursor pagination={false} autoplay={true} spaceBetween={0} navigation={false} slidesPerView={1}>
                {testimonialList.map(({ id, name, rating, review }) => (
                  <div key={id} className="mb-8">
                    
                    <blockquote className="mb-0 border-0 fs-lg">
                      <p>“{review}”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">{name}</h5>
                          <span className={`mb-3 ratings ${rating}`} />
                        </div>
                      </div>
                    </blockquote>
                  </div>
                ))}
              </Carousel>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </section>
  );
};

export default GoogleTestimonial;
