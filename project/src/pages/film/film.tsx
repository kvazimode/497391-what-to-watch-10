import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Loading from '../../components/loading/loading';
import Logo from '../../components/logo/logo';
import Tab from '../../components/tab/tab';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute, FilmTabs } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchSimilar } from '../../store/api-actions';
import { capitalize } from '../../tools';

function Film(): JSX.Element {
  const {id: filmId} = useParams();
  const dispatch = useAppDispatch();
  const {film, similar, isFilmLoaded} = useAppSelector((state) => state);
  const path = useLocation().pathname;
  const filmTab = path.split(/\//)[3];
  const [currentTab, setCurrentTab] = useState(filmTab ? capitalize(filmTab) : 'Overview');

  const onTabClick = (tabName: string) => setCurrentTab(tabName);

  useEffect(() => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(Number(filmId)));
      dispatch(fetchSimilar(Number(filmId)));
      setCurrentTab(FilmTabs[0]);
    }
  }, [filmId]);

  if (!isFilmLoaded || !film) {
    return <Loading />;
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
                    {FilmTabs.map((tab) => <Tab key={`tab-${tab}`} name={tab} isActive={tab === currentTab} onTabClick={onTabClick}/>)}
                  </ul>
                </nav>
                {currentTab === 'Overview' ? <FilmOverview /> : <Outlet />}
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
