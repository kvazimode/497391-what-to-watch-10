import FilmCard from '../../components/film-card/film-card';
import { Film } from '../../types/film';

type FilmListProp = {
  films: Film[];
}

function FilmsList({films}: FilmListProp): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard key={item.id} id={item.id} name={item.name} previewImage={item.previewImage}/>)}
    </div>
  );
}

export default FilmsList;
