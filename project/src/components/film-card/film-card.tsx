import { PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { FilmCard as FilmCardProps } from '../../types/film';
import { setIsFilmLoaded } from '../../store/action';
import Preview from '../preview/preview';

type FilmCardAction = {
  onPointerOver: (id: number) => void;
  onPointerOut: () => void;
  isHovered: boolean;
}

type ActiveFilmCard = FilmCardProps & FilmCardAction

function FilmCard(props: ActiveFilmCard): JSX.Element {
  const dispatch = useAppDispatch();
  const {id, name, previewImage, previewVideoLink, isHovered} = props;
  return (
    <article
      className="small-film-card catalog__films-card"
      onPointerOver={(evt: PointerEvent<HTMLDivElement>) => props.onPointerOver(id)}
      onPointerOut={() => props.onPointerOut()}
    >
      <div className="small-film-card__image">
        {isHovered ?
          <Preview src={previewVideoLink} previewImage={previewImage} isHovered={isHovered}/> :
          <img src={previewImage} alt={name} width={280} height={175} />}
      </div>
      <h3 className="small-film-card__title">
        <Link onClick={() => dispatch(setIsFilmLoaded(false))} to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
