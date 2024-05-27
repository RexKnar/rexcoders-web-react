import { FC } from 'react';
import OneToOneForm from 'components/elements/forms/OneToOneForm';

const OneToOne: FC = () => {
  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      id="modal-onetoone"
      className="modal fade"
      style={{ display: 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="text-center modal-content">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />

            <OneToOneForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneToOne;
