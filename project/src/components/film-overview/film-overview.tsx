import { useAppSelector } from '../../hooks';
import { getRatingLevel } from '../../tools';
import { makeStarring } from '../../tools';

function FilmOverview(): JSX.Element {
  const {rating, scoresCount, description, director, starring} = useAppSelector((state) => state.film);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">{description}
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {makeStarring(starring, ', ')} and other</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
