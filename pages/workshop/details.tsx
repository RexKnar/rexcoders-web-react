import { NextPage } from "next";

const details: NextPage = () => {
    return (
        <main className="content-wrapper">
            <section className="wrapper bg-soft-primary">
                <div className="container pt-10 pb-15 pt-md-14 pb-md-20">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
                        <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-7 text-center text-lg-start order-2 order-lg-0">
                            <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0 pt-6 animation-name:slideInDown;animation-delay:600ms;animation-fill-mode:both;animation-duration:700ms;animation-direction:normal;animation-timing-function:ease">
                                Embark on a Cosmic Journey Through the React Universe</h1>
                            <p className="lead fs-lg mb-7 animation-name:slideInDown;animation-delay:900ms;animation-fill-mode:both;animation-duration:700ms;animation-direction:normal;animation-timing-function:ease">
                                Step into the future of front-end development! Join our stellar React workshop and explore the vast potential of React101. Get hands-on with the front-end library behind the world’s most dynamic web applications, and elevate your coding skills to cosmic levels</p>
                            {/* <div className="d-flex justify-content-center justify-content-lg-start">
                                <span
                                    style={{
                                        animationName: 'slideInDown',
                                        animationDelay: '1200ms',
                                        animationFillMode: 'both',
                                        animationDuration: '700ms',
                                        animationDirection: 'normal',
                                        animationTimingFunction: 'ease',
                                    }}
                                ><a
                                    className="btn btn-primary rounded me-2" href="demo-12#">Start your Journey</a></span></div> */}
                        </div>
                        <div className="col-lg-5 pt-7">
    <div className="card border-primary">
        <div className="card-body">
            <form className="contact-form needs-validation" method="post">
                <div className="messages"></div>
                <div className="row gx-4">
                    <div className="form-floating mb-4">
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
                    
                    <div className="form-floating mb-4">
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

                    <div className="form-floating mb-4">
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

                    <div className="col-12 text-center">
                        <input 
                            type="submit"
                            className="btn btn-primary rounded-pill btn-send mb-3"
                            value="Register" 
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
            </section>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16 pb-md-17">
                    <div className="row gx-md-5 gy-5 mt-n18 mt-md-n21 mb-14 mb-md-17">
                        <div className="col-md-6 col-xl-3">
                            <div className="card shadow-lg card-border-bottom border-soft-yellow">
                                <div className="card-body"><svg viewBox="0 0 512 442.8" xmlns="http://www.w3.org/2000/svg"
                                    className="svg-inject icon-svg icon-svg-md text-yellow mb-3">
                                    <path className="lineal-stroke"
                                        d="M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z">
                                    </path>
                                    <path className="lineal-fill"
                                        d="M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z">
                                    </path>
                                    <path className="lineal-fill" d="M112.8 268.5h286.4v63.6H112.8z"></path>
                                    <path className="lineal-stroke"
                                        d="M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z">
                                    </path>
                                </svg>
                                    <h4>Launch Your Skills</h4>
                                    <p className="mb-2">Create your own Space Online with simple clicks. Whether it's a sleek portfolio or a website, you can conquer it with your simple clicks. Are you ready to blast off into the Digital world - Click Awaits</p><a className="more hover link-yellow"
                                        href="demo-12#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card shadow-lg card-border-bottom border-soft-green">
                                <div className="card-body"><svg viewBox="0 0 512 454.6" xmlns="http://www.w3.org/2000/svg"
                                    className="svg-inject icon-svg icon-svg-md text-green mb-3">
                                    <path className="lineal-fill" d="M131.5 126.8h249V15.2H15.2v256.3h116.3z"></path>
                                    <path className="lineal-stroke"
                                        d="M496.8 194.4c-8.4 0-15.2 6.8-15.2 15.2v158.3h-29.7c-8.4 0-15.2 6.8-15.2 15.2 0 .5 0 1.1.1 1.6l2.8 27.2-75.7-42.1c-2.3-1.3-4.8-1.9-7.4-1.9H146.7V142h233.8c8.4 0 15.2-6.8 15.2-15.2V15.2c0-8.4-6.8-15.2-15.2-15.2H15.2C6.8 0 0 6.8 0 15.2v256.3c0 8.4 6.8 15.2 15.2 15.2h101v96.4c0 8.4 6.8 15.2 15.2 15.2h221l97.8 54.3c7.3 4.1 16.6 1.4 20.7-5.9 1.5-2.7 2.2-5.9 1.8-9l-4.1-39.5h28.1c8.4 0 15.2-6.8 15.2-15.2V209.6c.1-8.4-6.7-15.2-15.1-15.2zM30.4 256.3V30.4h334.8v81.2H131.5c-8.4 0-15.2 6.8-15.2 15.2v129.5H30.4z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M413.8 223.6H214.4c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.2-15.2 15.2zm0 85.9H214.4c-8.4 0-15.2-6.8-15.2-15.2S206 279 214.4 279h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.3-15.2 15.3z">
                                    </path>
                                </svg>
                                    <h4>Explore New Worlds</h4>
                                    <p className="mb-2">Ever wondered how platforms like Instagram or Facebook update instantly when you post? Learn how to build your own dynamic features, and see the magic behind responsive apps.</p><a className="more hover link-green"
                                        href="demo-12#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card shadow-lg card-border-bottom border-soft-orange">
                                <div className="card-body"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 385"
                                    className="svg-inject icon-svg icon-svg-md text-orange mb-3">
                                    <path className="lineal-stroke"
                                        d="M360.1 385H49.5C22.2 385 0 362.9 0 335.5V124.2c0-27.3 22.2-49.5 49.5-49.5h310.6c27.3 0 49.5 22.2 49.5 49.5v211.4c0 27.3-22.2 49.4-49.5 49.4zM49.5 97.6c-14.6 0-26.5 11.9-26.5 26.6v211.4c0 14.7 11.9 26.5 26.5 26.5h310.6c14.7 0 26.5-11.9 26.5-26.5V124.2c0-14.7-11.9-26.5-26.5-26.5l-310.6-.1z">
                                    </path>
                                    <path className="lineal-fill"
                                        d="M262.6 51.9h-16.5c-.5-22.8-19.4-40.9-42.2-40.4-22.1.5-39.9 18.3-40.4 40.4H147c-18.9 0-34.2 15.3-34.2 34.2s15.3 34.2 34.2 34.2h115.6c18.9 0 34.2-15.3 34.2-34.2s-15.3-34.2-34.2-34.2z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M262.6 131.9H147c-25.2-.4-45.4-21.1-45-46.4.4-24.7 20.3-44.7 45-45h6.5c6.8-28.3 35.3-45.8 63.6-39 19.3 4.6 34.4 19.7 39 39h6.5c25.2.4 45.4 21.1 45 46.4-.4 24.6-20.3 44.6-45 45zM147 63.4c-12.6.3-22.5 10.7-22.3 23.2.3 12.2 10.1 22 22.3 22.3h115.6c12.6-.3 22.5-10.7 22.3-23.2-.3-12.2-10.1-22-22.3-22.3h-16.5c-6.2 0-11.3-5-11.5-11.2-.4-16.5-14.1-29.5-30.6-29.1-15.9.4-28.7 13.2-29.1 29.1-.1 6.2-5.2 11.2-11.5 11.2H147zm-4 234.3c-34.2-.1-61.9-28-61.7-62.3s28-61.9 62.3-61.7c5.3 0 10.5.7 15.6 2.1 6.1 1.6 9.8 7.9 8.1 14.1s-7.9 9.8-14.1 8.1c-20.8-5.6-42.3 6.7-47.9 27.6s6.7 42.3 27.6 47.9 42.3-6.7 47.9-27.6c.9-3.3 1.3-6.7 1.3-10.2.2-6.3 5.5-11.3 11.8-11.1 6.1.2 11 5.1 11.1 11.1 0 34.2-27.7 61.9-62 62z">
                                    </path>
                                    <path className="lineal-fill"
                                        d="M180.5 300.2c-11.3-7-24.3-10.6-37.5-10.6-39.6.1-71.7 32.2-71.8 71.9v10.7h143.7v-10.7c-.1-25.1-13.1-48.2-34.4-61.3">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M214.9 383.6H71.2c-6.3 0-11.5-5.1-11.5-11.4v-10.7c.5-46 38.2-82.9 84.2-82.4 45.3.5 81.9 37.1 82.4 82.4v10.7c0 6.3-5.1 11.4-11.4 11.4zM82.6 360.7h120.8c-.4-33.3-27.8-60-61.2-59.6-32.7.4-59.1 26.8-59.6 59.6zm255.9-111.9h-76.9c-6.3-.2-11.3-5.5-11.1-11.8.2-6.1 5.1-11 11.1-11.1h76.9c6.3-.2 11.6 4.8 11.8 11.1.2 6.3-4.8 11.6-11.1 11.8h-.7zm0 82.6h-76.9c-6.4 0-11.5-5.1-11.5-11.5s5.1-11.5 11.5-11.5h76.9c6.4 0 11.5 5.1 11.5 11.5s-5.2 11.5-11.5 11.5z">
                                    </path>
                                </svg>
                                    <h4>Tap into React’s Capabilities</h4>
                                    <p className="mb-2">Unlock React's full potential to create highly interactive user interfaces that fuels responsive web apps</p><a className="more hover link-orange"
                                        href="demo-12#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card shadow-lg card-border-bottom border-soft-blue">
                                <div className="card-body"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 388.9"
                                    className="svg-inject icon-svg icon-svg-md text-blue mb-3">
                                    <path className="lineal-fill"
                                        d="M251.1 258.8l-44.3-22.9c-1.3-.6-2.7-.6-4 0l-44.4 22.9c-2.1 1.1-4.7.3-5.8-1.9-.3-.6-.5-1.3-.5-2v-113l105.4.2v112.8c0 2.4-1.9 4.3-4.3 4.3-.8 0-1.5-.1-2.1-.4z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M253.1 270.7c-2.5 0-5-.6-7.2-1.8l-41.1-21.2-41.1 21.2c-2.2 1.2-4.7 1.8-7.2 1.8-8.7 0-15.8-7.1-15.8-15.8v-113c0-6.3 5.1-11.5 11.5-11.5l105.3.2c6.3 0 11.4 5.1 11.4 11.5v112.8c0 8.7-7.1 15.8-15.8 15.8zm-48.3-46.8c2.5 0 5 .6 7.2 1.8l34 17.6v-89.6l-82.4-.2v89.8l34-17.6c2.3-1.2 4.7-1.8 7.2-1.8z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M319.5 388.9H90.1c-29.6 0-53.6-24-53.6-53.6V142.1c0-6.3 5.1-11.5 11.5-11.5h313.8c6.3 0 11.5 5.1 11.5 11.5v25.5c.2 6.3-4.8 11.6-11.1 11.8-6.3.2-11.6-4.8-11.8-11.1v-14.7H59.3v181.7c0 17 13.8 30.7 30.7 30.7h229.5c17 0 30.7-13.8 30.7-30.7V228.8c0-6.3 5.1-11.5 11.5-11.5 6.3 0 11.5 5.1 11.5 11.5v106.4c-.1 29.7-24.1 53.6-53.7 53.7z">
                                    </path>
                                    <path className="lineal-fill"
                                        d="M356.5 142.1H53.2c-23 0-41.7-18.7-41.7-41.7 0-23 18.7-41.7 41.7-41.7h303.3c23 0 41.7 18.7 41.7 41.7-.1 23-18.7 41.7-41.7 41.7z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M356.5 153.5H53.2C23.8 153.5 0 129.7 0 100.4s23.8-53.2 53.2-53.2h303.3c29.4 0 53.1 23.8 53.1 53.2s-23.8 53.1-53.1 53.1zM53.2 70.1c-16.7-.3-30.5 13-30.8 29.7s13 30.5 29.7 30.8h304.4c16.7.3 30.5-13 30.8-29.7.3-16.7-13-30.5-29.7-30.8H53.2z">
                                    </path>
                                    <path className="lineal-fill"
                                        d="M203.2 58.7c-5.8-31.3-35.8-52-67.1-46.3-23.5 4.3-42 22.7-46.3 46.3h113.4z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M203.2 70.1H89.8c-6.3 0-11.5-5.1-11.4-11.5 0-.7.1-1.3.2-2C85.4 19 121.4-5.9 158.9 1c28.3 5.2 50.4 27.3 55.6 55.6 1.1 6.2-3 12.2-9.2 13.3-.7.1-1.4.2-2.1.2zm-97.4-22.9h81.4c-12.1-22.5-40.2-30.9-62.6-18.8-8 4.3-14.5 10.9-18.8 18.8z">
                                    </path>
                                    <path className="lineal-fill"
                                        d="M319.8 58.7c-5.8-31.3-35.8-52-67.1-46.3-23.5 4.3-42 22.7-46.3 46.3h113.4z">
                                    </path>
                                    <path className="lineal-stroke"
                                        d="M319.8 70.1H206.4c-6.3 0-11.4-5.1-11.4-11.4 0-.7.1-1.4.2-2C201.9 19 237.9-5.9 275.5 1c28.3 5.2 50.4 27.3 55.6 55.6 1.1 6.2-3 12.2-9.3 13.3-.6.1-1.3.2-2 .2zm-97.4-22.9h81.4c-12.1-22.5-40.2-30.9-62.6-18.8-8 4.3-14.5 10.9-18.8 18.8z">
                                    </path>
                                </svg>
                                    <h4>React Community</h4>
                                    <p className="mb-2">Simply register, and you’ll become part of our thriving React community! Connect with developers at all
                                         levels to expand your network. We will- support, provide resources, and mentorship to hep you grow in front end development.</p>
                                    <a className="more hover link-blue"
                                        href="demo-12#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}

export default details;