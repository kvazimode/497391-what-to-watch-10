import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { isAuthChecked } from '../../tools';
import Loading from '../loading/loading';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import FilmReviews from '../film-reviews/film-reviews';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';

function App(): JSX.Element {
  const {authStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isAuthChecked(authStatus) || !isDataLoaded) {
    return <Loading />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainScreen />
        }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={authStatus}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film />}>
          <Route path='overview' element={<FilmOverview />} />
          <Route path='details' element={<FilmDetails />} />
          <Route path='reviews' element={<FilmReviews />} />
        </Route>
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authStatus={authStatus}>
            <AddReview />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
