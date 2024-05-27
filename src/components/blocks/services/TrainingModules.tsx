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
      description: `Unlock your full potential with dedicated 1:1 mentoring, providing personalized guidance and support tailored to your individual needs.`
    },
    {
      id: 2,
      Icon: TeamTwo,
      color:color.violet,
      title: 'Private community',
      description: `You'll have the chance to connect, collaborate, and learn from fellow students, alumni, mentors, and industry professionals.`
    },
    {
      id: 3,
      color: color.orange,
      Icon: ClockThree,
      title: 'Flexible timing',
      description: `Empower your learning journey with flexible scheduling options, allowing you to balance your education with your busy lifestyle effortlessly.`
    },
    {
      id: 4,
      Icon: List,
      color: color.pink,
      title: 'Industry-Endorsed Curriculum',
      description: `Begin your journey with our proven curriculum, expertly designed for your success. Explore structured learning, endorsed by industry experts, to unlock your potential`
    },
    {
      id: 5,
      Icon: IdCard,
      color: color.green,
      title: 'Career support',
      description: `Our tailored training programme opens door to your dream job & connects you with top industry players actively seeking talent like you.`
    },
    {
      id: 6,
      Icon: SettingsThree,
      color: color.purple,
      title: 'Hands-on Learning ',
      description: `We prioritize practical learning through engaging real-life projects. Gain invaluable hands-on experience that prepares you for success in the tech industry.`
    }
  ];

  return (
    <section className="bg-white wrapper">
      <div className="container py-15 py-md-17">
        <div className="text-center row">
          <div className="mx-auto col-md-10 col-lg-9 col-xxl-8">
            <h2 className="mb-3 fs-15 text-uppercase text-muted">Why Rexcoders?</h2>
            <h3 className="display-3 ls-sm mb-9 px-xl-11">
            What Sets <span className="underline-3 style-2 green">Rexcoders</span> Apart from Others!
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
