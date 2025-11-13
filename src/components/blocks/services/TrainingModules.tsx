import Analytics from 'icons/lineal/Analytics';
import ChatTwo from 'icons/lineal/ChatTwo';
import ClockThree from 'icons/lineal/ClockThree';
import CloudComputingTwo from 'icons/lineal/CloudComputingTwo';
import IdCard from 'icons/lineal/IdCard';
import List from 'icons/lineal/List';
import Megaphone from 'icons/lineal/Megaphone';
import SettingsThree from 'icons/lineal/SettingsThree';
import Shield from 'icons/lineal/Shield';
import Telephone from 'icons/lineal/Telephone';
import User from 'icons/lineal/User';
import TeamTwo from 'icons/solid-mono/TeamTwo';
import { FC} from 'react';
import { slideInDownAnimate } from 'utils/animation';
import color from 'utils/color';




const TrainingModules: FC = () => {


  const featuresList = [
    {
      id: 1,
      Icon: User,
      color: color.blue,
      title: '1:1 Mentoring',
      description: `Get personalized, expert guidance with direct mentor support to clear doubts fast and stay on track toward becoming job-ready.`
    },
    {
      id: 3,
      color: color.orange,
      Icon: ClockThree,
      title: 'EMI + Scholarships',
      description: `Learn without financial stress using flexible EMI options or merit-based scholarships designed for students and freshers.`
    },
    {
      id: 4,
      Icon: List,
      color: color.pink,
      title: 'Industry-Endorsed Curriculum',
      description: `Master an industry-aligned curriculum built around in-demand skills, real tools, and practical workflows used by top companies.`
    },
    {
      id: 5,
      Icon: IdCard,
      color: color.green,
      title: 'Placement Support',
      description: `Boost your career with resume help, LinkedIn optimization, mock interviews, and referrals through our hiring partner network.`
    },
    {
      id: 6,
      Icon: SettingsThree,
      color: color.purple,
      title: 'Learn by Building',
      description: `Build real projects from day one and strengthen your portfolio with practical, hands-on experience that employers trust.`
    },
    {
      id: 2,
      Icon: TeamTwo,
      color: color.violet,
      title: 'Collaborative Learning',
      description: `Learn with peers through teamwork, group discussions, and pair programming to develop strong communication and team skills.`
    },
  ];
  



  // const featuresList = [
  //   {
  //     id: 1,
  //     Icon: User,
  //     color: color.blue,
  //     title: '1:1 Mentoring',
  //     description: `Gain personalized guidance from industry experts through live sessions and 1-on-1 mentorship. Get your doubts cleared, receive feedback, and learn directly from working professionals who understand real-world development challenges.`
  //   },
  //   {
  //     id: 3,
  //     color: color.orange,
  //     Icon: ClockThree,
  //     title: 'EMI + Scholarships',
  //     description: `We believe learning should be accessible to everyone. Choose flexible EMI plans to pay in parts, or apply for merit and need-based scholarships to reduce your financial burden and study without stress.`
  //   },
  //   {
  //     id: 4,
  //     Icon: List,
  //     color: color.pink,
  //     title: 'Industry-Endorsed Curriculum',
  //     description: `Learn from a curriculum shaped by real workplace needs. Each module focuses on in-demand skills, tools, and workflows used by top tech teams, preparing you to be job-ready from day one.`
  //   },
  //   {
  //     id: 5,
  //     Icon: IdCard,
  //     color: color.green,
  //     title: 'Placement support',
  //     description: `Our dedicated career support team prepares you for real interviews with resume polishing, LinkedIn optimization, mock interviews, and company referrals. We guide you step-by-step toward landing your first IT job with confidence.`
  //   },
  //   {
  //     id: 6,
  //     Icon: SettingsThree,
  //     color: color.purple,
  //     title: 'Learn by Building ',
  //     description: `We emphasize practical, hands-on learning where you build real-world projects from day one. Instead of just theory, you’ll create applications that strengthen your portfolio and showcase your abilities to recruiters.`
  //   },
  //   {
  //     id: 2,
  //     Icon: TeamTwo,
  //     color:color.violet,
  //     title: 'Collaborative Learning',
  //     description: `Learn and grow alongside motivated peers through group discussions, pair programming, and team projects. Build communication and teamwork skills that are essential in real-world tech roles.`
  //   },
  // ];

  return (
    <section className="bg-soft-primary wrapper">
      <div className="container py-15 py-md-17">
        <div className="text-center row">
          <div className="mx-auto col-md-10 col-lg-9 col-xxl-8">
            <h2 className="mb-3 fs-15 text-uppercase text-muted">Why Rexcoders?</h2>
            <h3 className="display-3 ls-sm mb-9 px-xl-11">
            Why Students Choose <span className="underline-3 style-2 green">Rexcoders</span>!
            </h3>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-8">
          {featuresList.map(({ Icon, id, title, color, description },index) => (
            <div className="col-md-6 col-lg-4" key={id} style={slideInDownAnimate(`${200*index}ms`)}>
              <div className="flex-row d-flex">
                <div>
                  <Icon className={`icon-svg-md text-${color} me-5 mt-1`} />
                </div>

                <div>
                  <h4 className="fs-20 ls-sm">{title}</h4>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingModules;
