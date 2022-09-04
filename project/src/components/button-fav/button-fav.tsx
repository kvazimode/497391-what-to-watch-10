import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToFav, fetchFavList } from '../../store/api-actions';

type ButtonFavProps = {
  isFav: boolean;
  filmId: number;
  type: string;
}

function ButtonFav({isFav, filmId, type}: ButtonFavProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector((state) => state.authStatus);
  const favFilms = useAppSelector((state) => state.favList);
  const isAuthorized = authStatus === AuthStatus.Auth;

  const handleClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.SignIn);
    }

    dispatch(addToFav({filmId, isFav: Number(!isFav), type}));
    dispatch(fetchFavList());
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
      <span className="film-card__count">{favFilms.length}</span>
    </button>
  );
}

export default ButtonFav;
