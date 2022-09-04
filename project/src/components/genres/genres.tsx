import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeGenre, showAll } from '../../store/action';

type GenresProps = {
  active: string;
  genres: string[];
}

function Genres({active, genres}: GenresProps): JSX.Element {
  const dispatch = useAppDispatch();
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
          <Link to={`?genre=${genre}`} className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
