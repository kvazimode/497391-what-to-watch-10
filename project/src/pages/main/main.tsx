import Promo from '../../components/promo/promo';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import {Film} from '../../types/film';

type MainScreenProps = {
  promoId: number;
  films: Film[];
};

function MainScreen({promoId, films}: MainScreenProps): JSX.Element {
  let promoTitle = 'Promo film not found';
  let promoGenre = '';
  let promoRelease = 0;
  const promo = films.find((item) => item.id === promoId);
  if (promo) {
    promoTitle = promo.name;
    promoGenre = promo.genre;
    promoRelease = promo.released;
  }

  return (
    <>
      <Promo promoTitle={promoTitle} promoGenre={promoGenre} promoRelease={promoRelease}/>
      <div className="page-content">
        <Catalog films={films}/>
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
