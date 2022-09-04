import { useAppSelector } from '../../hooks';
import style from './Error-message.module.css';

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);
  return error && error.code !== 401
    ? <div className={style.errorMessage}>{error.text}</div>
    : null;
}

export default ErrorMessage;
