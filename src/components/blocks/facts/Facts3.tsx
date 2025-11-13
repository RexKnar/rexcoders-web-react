import { FC } from 'react';
import { Counter2 } from 'components/reuseable/counter';
// -------- data -------- //
import { factList2 } from 'data/facts';

const Facts3: FC = () => {
  return (
    <div className="mt-10 row">
      <div className="mx-auto col-xl-10">
        <div
          
          className="text-white card image-wrapper bg-full bg-primary mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top"
        >
          <div className="card-body p-9 p-xl-10">
            <div className="text-center row align-items-center counter-wrapper gy-4">
              {factList2.map((item) => (
                <Counter2 key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts3;
