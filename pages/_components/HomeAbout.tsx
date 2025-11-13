import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //


const HomeAbout: FC = () => {
    const aboutList = [
        ['A structured learning path', 'Clear placement roadmap'],
        ['Industry-aligned projects', 'Personalised mentorship']
      ];
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6">
        <Megaphone className="mb-4 icon-svg-md" />

        <h2 className="mb-3 display-4">About Rexcoders Coding Academy</h2>

        <p className="lead fs-lg">
        Rexcoders Coding Academy is a practical, outcome-driven training platform for students and graduates who want to break into the IT industry.
        </p>

        <p className="mb-6">
        Our programs focus on real-world projects, industry tools, soft-skill development, and complete placement support, empowering every learner to build a successful IT career with confidence.
        </p>
        <h4>We believe every learner deserves:</h4>
        <ListColumn rowClass="gx-xl-8" list={aboutList} />
      </div>
    </div>
  );
};

export default HomeAbout;
