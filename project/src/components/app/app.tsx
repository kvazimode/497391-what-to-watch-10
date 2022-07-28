import MainScreen from '../../pages/main/main';

type AppScreenProps = {
  cardCount: number;
}

function App({cardCount}: AppScreenProps): JSX.Element {
  return <MainScreen cardCount={cardCount}/>;
}

export default App;
