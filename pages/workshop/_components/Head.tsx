import RegisterForm from "components/elements/forms/RegisterForm";
import { FC } from "react";

const Head: FC = () => {

    return (
        <>
            <section className="wrapper bg-soft-primary angled lower-start">
                <div className="container pt-17  pt-md-18 pb-8">
                    <div className="row gx-0 gy-10 align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <h1 className="display-1 text-black mb-4
                                                style={{animation-name:slideInDown;animation-delay:600ms;animation-fill-mode:both;animation-duration:700ms;animation-direction:normal;animation-timing-function:ease}}">
                                Embark on a Cosmic Journey  <br /><span className="text-primary text-wrap">
                                    <div className="Typewriter typewriter-wrapper">Through the React Universe</div>
                                </span></h1>
                            <p className="lead lh-sm text-black mb-7  pe-lg-0 pe-xxl-15
                                                style={{animation-name:slideInDown;animation-delay:900ms;animation-fill-mode:both;animation-duration:700ms;animation-direction:normal;animation-timing-function:ease}} text-justify">
                                Step into the future of front-end development! Join our stellar React workshop and explore the vast potential of React101. Get hands-on with the front-end library behind the world’s most dynamic web applications, and elevate your coding skills to cosmic levels.</p>
                            <div className="row gx-2 align-items-center">
                                <div className="col-auto pb-3">
                                    <i className="uil display-4 uil-calendar-alt"></i>
                                </div>
                                <div className="col">
                                    <h3>November 30 @ 11:30 AM</h3>
                                    <p>Hosted by Sobin JM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5  mb-n18" data-cues="slideInDown">
                            <div className="position-relative
                                                style={{animation-name:slideInDown;animation-delay:0ms;animation-fill-mode:both;animation-duration:700ms;animation-direction:normal;animation-timing-function:ease}}">
                            </div>

                            <div className="card border-secondary">
                                <div className="card-body px-8">
                                    <RegisterForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

        </>
    );
};

export default Head;