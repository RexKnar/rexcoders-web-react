import useRecaptchaV3 from 'hooks/useRecaptchaV3';
import { FC, FormEvent, useState } from 'react';
import { verifyRecaptchaV3 } from 'services/recaptchaV3';

const OneToOneForm: FC = () => {
  const executeRecaptcha = useRecaptchaV3('6Lf3BtEpAAAAAC_ALoMxFEnQDhL5asZF4I35Ezn4');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const recaptchaToken : any = await executeRecaptcha('onetoone');
    console.log(recaptchaToken);
    let status = await verifyRecaptchaV3({ token: recaptchaToken, form: 'onetoone' });
  };

  return (
    <>
      <h2 className="mb-3 text-start">Book your Free 1:1</h2>
      <p className="mb-6 lead text-start"></p>

      <form onSubmit={handleSubmit} className="mb-3 text-start">
        <div className="mb-4 form-floating ">
          <input
            value={name}
            id="bookingName"
            placeholder="Name"
            className="form-control"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="bookingName">Name</label>
        </div>
        <div className="mb-4 form-floating">
          <input
            type="email"
            value={email}
            id="bookingEmail"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="bookingEmail">Email</label>
        </div>
        <div className="mb-4 form-floating ">
          <input
            value={mobile}
            id="bookingMobile"
            placeholder="Mobile"
            className="form-control"
            type="text"
            onChange={(e) => setMobile(e.target.value)}
          />

          <label htmlFor="bookingMobile">Mobile</label>
        </div>

        <button type="submit" className="mb-2 btn btn-primary rounded-pill btn-login w-100">
          Book Now
        </button>
      </form>
    </>
  );
};

export default OneToOneForm;
