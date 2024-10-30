import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Launch Your Skills',
    body: "Create your own Space Online with simple clicks. Whether it's a sleek portfolio or a website, you can conquer it with your simple clicks. Are you ready to blast off into the Digital world - Click Awaits"
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Explore New Worlds',
    body: "Ever wondered how platforms like Instagram or Facebook update instantly when you post? Learn how to build your own dynamic features, and see the magic behind responsive apps"

  },
  {
    no: 'Three',
    expand: false,
    heading: 'Tap into React’s Capabilities',
    body: "Unlock React's full potential to create highly interactive user interfaces that fuels responsive web apps"
  }
];

const AccordionList: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};


export default AccordionList;
