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




const Mission: FC = () => {

  const featuresList = [
    {
      id: 1,
      Icon: User,
      color: color.blue,
      title: 'Launch Your Skills',
      description: `Create your own Space Online with simple clicks. Whether it's a sleek portfolio or a website, you can conquer it with your simple clicks. Are you ready to blast off into the Digital world - Click Awaits`
    },
    {
      id: 2,
      Icon: TeamTwo,
      color:color.violet,
      title: 'Explore New Worlds',
      description: `Ever wondered how platforms like Instagram or Facebook update instantly when you post? Learn how to build your own dynamic features, and see the magic behind responsive apps.`
    },
    {
      id: 3,
      color: color.orange,
      Icon: ClockThree,
      title: 'Tap into React’s Capabilities',
      description: `Unlock React's full potential to create highly interactive user interfaces that fuels responsive web apps.`
    },
    {
      id: 4,
      Icon: List,
      color: color.pink,
      title: 'Join the Community',
      description: `Connect with fellow developers of all levels in a vibrant React community. Engage with professionals and peers and expand your network as you advance in front-end development.`
    },
  ];

  return (
    <section className="bg-white wrapper">
      <div className="container py-15 py-md-17">
        <div className="text-center row">
          <div className="mx-auto col-md-10 col-lg-9 col-xxl-8">
            <h3 className="display-3 ls-sm mb-9 px-xl-11">
            Your Cosmic Mission
            </h3>
          </div>
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-8">
  {featuresList.map(({ Icon, id, title, color, description }, index) => (
    <div className="col-6 col-md-3" key={id} style={slideInDownAnimate(`${200 * index}ms`)}>
      <div className="d-flex flex-column align-items-center shadow p-3 mb-4 rounded border border-primary"> {/* Added border class */}
        <div>
          <Icon className={`icon-svg-md text-${color} mb-3`} />
        </div>
        <div className="text-center">
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

export default Mission;
