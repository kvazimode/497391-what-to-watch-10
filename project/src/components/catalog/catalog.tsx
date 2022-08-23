import Genres from '../genres/genres';
import FilmsList from '../films-list/films-list';
import { Film } from '../../types/film';

type CatalogProps = {
  films: Film[]
}

function Catalog({films}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Genres active={'you'} genres={['lol', 'you']}/>
      <FilmsList films={films}/>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
