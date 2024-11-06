import { FC } from 'react';

// ================================================
type ServiceCard3Props = {
  title: string;
  Icon: JSX.Element;
  className?: string;
  color?: string;
};
// ================================================

const ServiceCard3: FC<ServiceCard3Props> = (props) => {
  const { title, Icon, className = 'd-flex flex-row' } = props;
  return (
    <div className={className}>
      <div>{Icon}</div>

      <div>
        <h4 className="mb-1">{title}</h4>
    
      </div>
    </div>
  );
};

export default ServiceCard3;
