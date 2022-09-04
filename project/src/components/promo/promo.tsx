import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import ButtonFav from '../button-fav/button-fav';
import UserBlock from '../user-block/user-block';

function Promo(): JSX.Element {
  const {promoFilm} = useAppSelector((state) => state);
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width={218} height={327} />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>
            <div className="film-card__buttons">
              <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button">
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>
              <ButtonFav isFav={promoFilm.isFavorite} filmId={promoFilm.id} type={'promo'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
