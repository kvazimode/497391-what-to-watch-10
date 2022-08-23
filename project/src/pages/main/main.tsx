import Promo from '../../components/promo/promo';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';

type MainScreenProps = {
  promoId: number;
};

function MainScreen({promoId}: MainScreenProps): JSX.Element {
  let promoTitle = 'Promo film not found';
  let promoGenre = '';
  let promoRelease = 0;
  const films = useAppSelector((state) => state.films);
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
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
