import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeGenre, showAll } from '../../store/action';
import films from '../../mocks/films';
import { getGenres } from '../../tools';

type GenresProps = {
  active: string;
}

function Genres({active}: GenresProps): JSX.Element {
  const dispatch = useAppDispatch();

  const genres = getGenres(films);
  const genreClickHandler = (e: MouseEvent) => {
    const selected = e.currentTarget.textContent;
    if (selected === 'All genres') {
      dispatch(showAll());
      return;
    }
    if (selected) {
      dispatch(changeGenre({genre: selected}));
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item catalog__genres-item${active === genre ? '--active' : '' }`} onClick={genreClickHandler}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
