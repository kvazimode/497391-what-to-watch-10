import Genres from '../genres/genres';
import FilmsList from '../films-list/films-list';
import { Film } from '../../types/film';
import { getGenres } from '../../tools';

type CatalogProps = {
  films: Film[]
}

function Catalog({films}: CatalogProps): JSX.Element {
  const genres = getGenres(films);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Genres active={'All genres'} genres={genres}/>
      <FilmsList films={films}/>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
