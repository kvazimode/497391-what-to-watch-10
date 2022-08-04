import Genres from '../genres/genres';
import FilmCard from '../../components/film-card/film-card';

type CatalogProps = {
  cards: number[]
}

function Catalog({cards}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Genres />
      <div className="catalog__films-list">
        {cards.map((item) => <FilmCard key={item} />)}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
