import { PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { FilmCard as FilmCardProps } from '../../types/film';

type FilmCardAction = {
  onPointerOver?: (id: number) => void;
  onPointerOut?: () => void;
}

type ActiveFilmCard = FilmCardProps & FilmCardAction

function FilmCard(props: ActiveFilmCard): JSX.Element {
  const {id, name, previewImage} = props;
  return (
    <article
      className="small-film-card catalog__films-card"
      onPointerOver={(evt: PointerEvent<HTMLDivElement>) => props.onPointerOver?.(id)}
      onPointerOut={() => props.onPointerOut?.()}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/:${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
