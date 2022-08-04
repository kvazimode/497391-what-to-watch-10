import { Link } from 'react-router-dom';
import { FilmCard as FilmCardProps } from '../../types/film-card';

function FilmCard(props: FilmCardProps): JSX.Element {
  const {id, name, posterImage} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/:${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
