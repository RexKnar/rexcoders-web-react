
import { NextPage } from "next";
import Banner from "./_components/Banner";
import Head from "./_components/Head";
import Event from "./_components/Event";
import Faq from "./_components/Faq";
import Testimonial from "./_components/Testimonial";
import Mentor from "./_components/Mentor";
import Process from "./_components/Process";
import Mission from "./_components/Mission";
import Placement from "./_components/Placement";
import Footer from "./_components/Footer";


const details: NextPage = () => {
    return (
        <main className="content-wrapper">
            <Head/>
           <Process/>
            <Mission/>
            {/* <Event/> */}
            {/* <Mentor/> */}
            <Testimonial />
            <Placement/>
            <Faq />
            <Banner/>
            <Footer/>
        </main>
    );

}

export default details;