import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Loading from '../../components/loading/loading';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchSimilar } from '../../store/api-actions';
import { getRatingLevel } from '../../tools';

function Film(): JSX.Element {
  const {id: filmId} = useParams();
  const dispatch = useAppDispatch();
  const {film, similar, isFilmLoaded} = useAppSelector((state) => state);

  useEffect(() => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(Number(filmId)));
      dispatch(fetchSimilar(Number(filmId)));
    }
  }, [filmId]);

  const makeStarring = (actors: string[] | undefined) => {
    if (!actors) {
      return;
    }
    return actors.join(', ');
  };

  if (!isFilmLoaded) {
    <Loading />;
  }

  return (
    <>
      <div>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film?.backgroundImage} alt={film?.name} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header film-card__head">
              <Logo />
              <UserBlock />
            </header>
            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film?.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film?.genre}</span>
                  <span className="film-card__year">{film?.released}</span>
                </p>
                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </button>
                  <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film?.posterImage} alt={`${film?.name} poster`} width={218} height={327} />
              </div>
              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="#" className="film-nav__link">Overview</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Details</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>
                <div className="film-rating">
                  <div className="film-rating__score">{film?.rating}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
                    <span className="film-rating__count">{film?.scoresCount} ratings</span>
                  </p>
                </div>
                <div className="film-card__text">{film?.description}
                  <p className="film-card__director"><strong>Director: {film?.director}</strong></p>
                  <p className="film-card__starring"><strong>Starring: {makeStarring(film.starring)} and other</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={similar}/>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Film;
