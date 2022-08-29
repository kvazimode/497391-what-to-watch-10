import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';

function UserBlock(): JSX.Element {
  const {authStatus} = useAppSelector((state) => state);

  return (
    <ul className="user-block">
      {authStatus === AuthStatus.Auth &&
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </li>}
      <li className="user-block__item">
        {authStatus === AuthStatus.Auth
          ? <a className="user-block__link">Sign out</a>
          : <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>}
      </li>
    </ul>
  );
}

export default UserBlock;