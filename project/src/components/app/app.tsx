import MainScreen from '../../pages/main/main';

type AppScreenProps = {
  cardCount: number;
  promoTitle: string;
  promoGenre: string;
  promoRelease: number;
}

function App({cardCount, promoTitle, promoGenre, promoRelease}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoRelease={promoRelease}
      cardCount={cardCount}
    />
  );
}

export default App;
