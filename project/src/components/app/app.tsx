import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';

type AppScreenProps = {
  cardCount: number;
  promoTitle: string;
  promoGenre: string;
  promoRelease: number;
}

function App({cardCount, promoTitle, promoGenre, promoRelease}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <MainScreen
            promoTitle={promoTitle}
            promoGenre={promoGenre}
            promoRelease={promoRelease}
            cardCount={cardCount}
          />
        }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
