import Genres from '../genres/genres';
import FilmsList from '../films-list/films-list';
import { useAppSelector } from '../../hooks/index';

function Catalog(): JSX.Element {
  const {films, genre} = useAppSelector((state) => state);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Genres active={genre} />
      <FilmsList films={films}/>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
