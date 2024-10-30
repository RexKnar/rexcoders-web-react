import { FC } from "react";

const Banner: FC = () => {

    return (
        <>
            <section id="snippet-5" className="wrapper bg-light ">
                <div className="pt-14 pt-md-15">
                    <section className="wrapper bg-navy angled upper-start ">
                        <div className="container pb-13 pb-md-15">
                            <div className="d-lg-flex flex-row align-items-lg-center">
                                <div>
                                <h3 className="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">
                                   React Community
                                </h3>
                                <p className="mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">Simply register, and you’ll become part of our thriving React community! Connect with developers at all levels to expand your network. We will- support, provide resources, and mentorship to help you grow in front end development.</p>
                                </div>
                                <a className="btn btn-primary rounded-pill mb-0 text-nowrap" href="demo-1#">Try It For Free</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Banner;
