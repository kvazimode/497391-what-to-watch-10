import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const {authStatus} = useAppSelector((state) => state);

  return (
    <ul className="user-block">
      {authStatus === AuthStatus.Auth &&
        <li className="user-block__item">
          <Link to={AppRoute.MyList}>
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </Link>
        </li>}
      <li className="user-block__item">
        {authStatus === AuthStatus.Auth
          ? <p className="user-block__link" onClick={() => dispatch(logout())}>Sign out</p>
          : <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>}
      </li>
    </ul>
  );
}

export default UserBlock;
