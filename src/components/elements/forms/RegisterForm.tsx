import { FormEvent, Fragment, useState, FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const RegisterForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <form className="contact-form needs-validation" method="post">
        <div className="messages"></div>
        <h1 className="display-2 text-center ">Start Your Journey</h1>
        <div className="row gx-4 justify-content-center">
          <div className="col-12">
            <div className="form-floating mt-7 mb-6">
              <input
                required
                type="text"
                name="name"
                id="form_name"
                placeholder="Jane"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="form_name">Name *</label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter your first name.</div>
            </div>
          </div>

          <div className="col-12 ">
            <div className="form-floating mb-6 ">
              <input
                required
                type="email"
                name="email"
                id="form_email"
                className="form-control"
                placeholder="jane.doe@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="form_email">Email *</label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please provide a valid email address.</div>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating mb-7">
              <input
                required
                type="tel"
                name="phone"
                id="form_phone"
                className="form-control"
                placeholder="123-456-7890"
                onChange={(e) => setContactNo(e.target.value)}
              />
              <label htmlFor="form_phone">Contact *</label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please provide a valid phone number.</div>
            </div>
          </div>

          <div className="col-12 text-center">
            <input
              type="submit"
              className="btn btn-primary rounded-pill btn-send mb-3"
              value="Register Now !"
            />

          </div>
        </div>
      </form>

    </Fragment>
  );
};

export default RegisterForm;
