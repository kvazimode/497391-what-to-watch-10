import Promo from '../../components/promo/promo';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';

type MainScreenProps = {
  cardCount: number;
  promoTitle: string;
  promoGenre: string;
  promoRelease: number;
};

function MainScreen({cardCount, promoTitle, promoGenre, promoRelease}: MainScreenProps): JSX.Element {
  const cards: number[] = [];
  for (let i = 0; i < cardCount; i++) {
    cards.push(i);
  }
  return (
    <>
      <Promo promoTitle={promoTitle} promoGenre={promoGenre} promoRelease={promoRelease}/>
      <div className="page-content">
        <Catalog cards={cards}/>
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
