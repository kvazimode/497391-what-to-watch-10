import Genres from '../genres/genres';
import FilmsList from '../films-list/films-list';
import { useAppSelector } from '../../hooks/index';
import ButtonMore from '../button-more/button-more';
import { useEffect, useState } from 'react';
import { PAGE_LIMIT } from '../../const';
import { cropList } from '../../tools';

function Catalog(): JSX.Element {
  const {films, genre} = useAppSelector((state) => state);
  const [part, setPart] = useState(1);
  const [shownCards, setShownCards] = useState(cropList(films, PAGE_LIMIT));
  const [isButtonVisible, setIsButtonVsible] = useState(true);

  const buttonMoreClickHandler = () => setPart(1 + part);

  useEffect(() => {
    setPart(1);
  }, [films]);

  useEffect(() => {
    const amount = part * PAGE_LIMIT;
    setShownCards(cropList(films, amount));
    setIsButtonVsible(amount <= films.length);
  }, [part, films]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Genres active={genre} />
      <FilmsList films={shownCards}/>
      {isButtonVisible ? <ButtonMore clickHandler={buttonMoreClickHandler}/> : ''}
    </section>
  );
}

export default Catalog;
