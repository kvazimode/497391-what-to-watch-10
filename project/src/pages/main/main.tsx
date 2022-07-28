import FilmCard from '../../components/film-card/film-card';
import Promo from '../../components/promo/promo';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';

type MainScreenProps = {
  cardCount: number;
};

function MainScreen({cardCount}: MainScreenProps): JSX.Element {
  const cards: number[] = [];
  for (let i = 0; i < cardCount; i++) {
    cards.push(i);
  }
  return (
    <>
      <Promo />
      <div className="page-content">
        <section className="catalog">
          <Catalog />
          <div className="catalog__films-list">
            {cards.map((item) => <FilmCard key={item} />)}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
