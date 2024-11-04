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
                                <div className="row gx-2 align-items-center"> {/* Use align-items-center to vertically center */}
    <div className="col-auto pb-3"> {/* Use col-auto to fit the content */}
        <i className="uil display-4 uil-calendar-alt"></i>
    </div>
    <div className="col"> {/* Remaining space for the heading */}
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
                                <div className="card-body px-1">
                                    <form className="contact-form needs-validation" method="post">
                                        <div className="messages"></div>
                                        <h1 className="display-2 text-center ">Start Your Journey</h1>
                                        <div className="row gx-4 justify-content-center">
                                        <div className="col-10">
                                            <div className="form-floating mt-7 mb-6">
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    id="form_name"
                                                    placeholder="Jane"
                                                    className="form-control"
                                                />
                                           
                                                <label htmlFor="form_name">Name *</label>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">Please enter your first name.</div>
                                            </div>
                                            </div>

                                            <div className="col-10 ">
                                            <div className="form-floating mb-6 ">
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    id="form_email"
                                                    className="form-control"
                                                    placeholder="jane.doe@example.com"
                                                />
                                                <label htmlFor="form_email">Email *</label>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">Please provide a valid email address.</div>
                                            </div>
                                            </div>

                                            <div className="col-10">
                                            <div className="form-floating mb-7">
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    id="form_phone"
                                                    className="form-control"
                                                    placeholder="123-456-7890"
                                                />
                                                <label htmlFor="form_phone">Contact *</label>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">Please provide a valid phone number.</div>
                                            </div>
                                            </div>

                                            <div className="col-12 text-center">
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary rounded-pill btn-send mb-3"
                                                    value="Register Now !"
                                                />
                                                {/* <p className="text-muted"><strong>*</strong> These fields are required.</p> */}
                                            </div>
                                        </div>
                                    </form>
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