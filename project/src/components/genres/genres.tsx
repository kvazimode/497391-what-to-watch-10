type GenresProps = {
  active: string;
  genres: string[]
}

function Genres({active, genres}: GenresProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item catalog__genres-item${active === genre ? '--active' : '' }`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
