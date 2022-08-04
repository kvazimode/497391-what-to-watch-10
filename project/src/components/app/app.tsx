import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import MainScreen from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {Film as FilmProp} from '../../types/film';

type AppScreenProps = {
  promoId: number;
  films: FilmProp[];
}

function App({promoId, films}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainScreen
            promoId={promoId}
            films={films}
          />
        }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={AuthStatus.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authStatus={AuthStatus.NoAuth}>
            <AddReview />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
