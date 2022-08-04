import Genres from '../genres/genres';
import FilmCard from '../../components/film-card/film-card';
import { FilmCard as FilmCardProp } from '../../types/film';

type CatalogProps = {
  films: FilmCardProp[]
}

function Catalog({films}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Genres />
      <div className="catalog__films-list">
        {films.map((item) => <FilmCard key={item.id} id={item.id} name={item.name} previewImage={item.previewImage}/>)}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
