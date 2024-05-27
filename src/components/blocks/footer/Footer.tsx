import { FC } from 'react';
// -------- custom component -------- //
import SocialLinks from 'components/reuseable/SocialLinks';
import NextLink from 'components/reuseable/links/NextLink';


const Footer: FC = () => {
  const footerNav = [
    { title: 'Blog', url: '#' },
    { title: 'Careers', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Terms of Use', url: '#' },
    { title: 'Privacy Policy', url: '#' }
  ];
  return (
    <footer className="bg-navy text-inverse">
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        {/* <div className="flex-row d-lg-flex align-items-lg-center">
          <h3 className="mb-6 text-white display-4 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25">
            Join our community by using our services and grow your business.
          </h3>

          <NextLink href="#" title="Try It For Free" className="mb-0 btn btn-primary rounded-pill text-nowrap" />
        </div> */}

        {/* <hr className="mb-12 mt-11" /> */}

        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img className="mb-4" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt="" />

              <p className="mb-4">
                © {(new Date().getFullYear())} Rexcoders. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>

              
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="mb-3 text-white widget-title">Get in Touch</h4>
              {/* <address className="pe-xl-15 pe-xxl-17">Moonshine St. 14/05 Light City, London, United Kingdom</address> */}
              <NextLink title="info@rexcoders.in" href="mailto:info@rexcoders.in" />
              <br /> +91 89038 19284,<br/> +91 89400 43284
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="mb-3 text-white widget-title">Learn More</h4>
              <ul className="mb-0 list-unstyled">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-lg-3">
          <div className="widget">
              <h4 className="mb-3 text-white widget-title">Follow us on</h4>
              <SocialLinks className="nav social social-white" />
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
