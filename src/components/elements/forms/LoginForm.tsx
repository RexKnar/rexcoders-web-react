import { FC, FormEvent,  useState } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(email, password);
  };

  return (
    <>
      <h2 className="mb-3 text-start">Welcome Back</h2>
      <p className="mb-6 lead text-start">Fill your email and password to sign in.</p>

      <form onSubmit={handleSubmit} className="mb-3 text-start">
        <div className="mb-4 form-floating">
          <input
            type="email"
            value={email}
            id="loginEmail"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="loginEmail">Email</label>
        </div>

        <div className="mb-4 form-floating password-field">
          <input
            value={password}
            id="loginPassword"
            placeholder="Password"
            className="form-control"
            type={visiblePassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <i className={`uil  ${visiblePassword ? 'uil-eye-slash' : 'uil-eye'}`} />
          </span>

          <label htmlFor="loginPassword">Password</label>
        </div>

        <button type="submit" className="mb-2 btn btn-primary rounded-pill btn-login w-100">
          Sign In
        </button>
      </form>

      <p className="mb-1">
        <NextLink title="Forgot Password?" href="/register" className="hover" />
      </p>

      <p className="mb-0">
        Don&apos;t have an account? <NextLink title="Sign up" href="/register" className="hover" />
      </p>

      <div className="my-4 divider-icon">or</div>

      <nav className="text-center nav social justify-content-center">
        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-google">
          <i className="uil uil-google" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-facebook-f">
          <i className="uil uil-facebook-f" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-twitter">
          <i className="uil uil-twitter" />
        </a>
      </nav>
    </>
  );
};

export default LoginForm;
