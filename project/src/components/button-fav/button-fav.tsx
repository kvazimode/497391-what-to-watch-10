import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToFav } from '../../store/api-actions';

type ButtonFavProps = {
  isFav: boolean;
  filmId: number;
  type: string;
}

function ButtonFav({isFav, filmId, type}: ButtonFavProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { favList, authStatus } = useAppSelector((state) => state);
  const isAuthorized = authStatus === AuthStatus.Auth;
  const handleClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.SignIn);
      return;
    }
    dispatch(addToFav({filmId, isFav: Number(!isFav), type}));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      {isAuthorized && isFav
        ? (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        )
        : (
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>
        )}
      <span>My list</span>
      <span className="film-card__count">{favList.length}</span>
    </button>
  );
}

export default ButtonFav;
