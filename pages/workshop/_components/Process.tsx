import { FC } from 'react';

import { processList7 } from 'data/process';
import ServiceCard7 from 'components/reuseable/service-cards/ServiceCard7';

const Process: FC = () => {
    return (
        <section id="snippet-12" className="wrapper bg-light ">
            <div className="container pt-19 pt-md-20 pt-lg-20 pb-lg-2 pb-10 pb-md-10">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
                        <h3 className="display-4 mb-10 px-xxl-15">What Makes This Workshop Unique?</h3>
                    </div>
                </div>
                <ul role="tablist" className="nav b-0 d-flex justify-content-between nav-justified flex-lg-row flex-column">
    <li className="nav-item" role="presentation">
        <div
            role="tab"
            data-bs-toggle="tab"
            aria-selected="true"
            className="nav-link d-lg-flex d-md-flex d-block"
        >
            <div className="d-flex flex-wrap w-100"style={{ gap: '1rem 0' }} >
                {processList7.map(({ Icon, color, ...item }, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                        <ServiceCard7
                            {...item}
                            Icon={<Icon className={`icon-svg-sm text-${color} me-4`} />}
                        />
                    </div>
                ))}
            </div>
        </div>
    </li>
</ul>

            </div>

        </section>
    );
};

export default Process;
