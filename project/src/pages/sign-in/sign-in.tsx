import { useRef, FormEvent, useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../store/api-actions';

function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const [isLoginValid, setIsLoginlValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const {error} = useAppSelector((state) => state);
  const passRegExp = /^[0-9a-zA-Z]+$/;
  const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

  const onLoginChange = () => {
    if (loginRef.current) {
      emailRegexp.test(loginRef.current.value) ? setIsLoginlValid(true) : setIsLoginlValid(false);
    }
  };

  const onPasswordChange = () => {
    if (passRef.current) {
      passRegExp.test(passRef.current.value) ? setIsPasswordValid(true) : setIsPasswordValid(false);
    }
  };

  const isBothValid = isLoginValid && isPasswordValid;
  const isBothNotValid = !isLoginValid && !isPasswordValid;
  const isLoginValidOnly = isLoginValid && !isPasswordValid;
  const isPasswordValidOnly = !isLoginValid && isPasswordValid;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginRef.current && passRef.current && isBothValid) {
      dispatch(login({
        email: loginRef.current.value,
        password: passRef.current.value,
      }));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmit}>
          <div className="sign-in__message">
            <p>
              {error !== null && error.code === 403 && 'Dont know this login/pass combination'}
              {isBothNotValid && 'These login and password are not valid'}
              {isPasswordValidOnly && 'Your login is not valid'}
              {isLoginValidOnly && 'Your password is not valid'}
            </p>
          </div>
          <div className="sign-in__fields">
            <div className={`sign-in__field${!isLoginValid && 'sign-in__field--error'}`}>
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={onLoginChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field${!isPasswordValid && 'sign-in__field--error'}`}>
              <input
                ref={passRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={onPasswordChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" >Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
