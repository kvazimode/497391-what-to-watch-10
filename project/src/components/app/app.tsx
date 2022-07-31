import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main/main';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
