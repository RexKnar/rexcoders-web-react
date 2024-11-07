
import { NextPage } from "next";
import Banner from "./_components/Banner";
import Event from "./_components/Event";
import Faq from "./_components/Faq";
import Testimonial from "./_components/Testimonial";
import Mentor from "./_components/Mentor";
import Process from "./_components/Process";
import Mission from "./_components/Mission";
import Placement from "./_components/Placement";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Header from "./_components/Head";

const details: NextPage = () => {
    return (
        <main className="content-wrapper">
            <Header
            info
            navOtherClass="navbar-other ms-lg-4"
            navClassName="navbar navbar-expand-lg center-nav navbar-bg-light"
            button={<a href="#" data-bs-toggle="modal" data-bs-target="#modal-signup" className="rounded btn btn-sm btn-primary">Register Now!</a>}/>
            <HeroSection />
            <Process />
            <Mission />
            {/* <Event/> */}
            {/* <Mentor/> */}
            <Testimonial />
            <Placement />
            <Faq />
            {/* <Banner /> */}
            <Footer />
        </main>
    );

}

export default details;