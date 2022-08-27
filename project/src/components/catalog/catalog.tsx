import Genres from '../genres/genres';
import FilmsList from '../films-list/films-list';
import { useAppSelector } from '../../hooks/index';
import ButtonMore from '../button-more/button-more';
import { useEffect, useState } from 'react';
import { PAGE_LIMIT } from '../../const';
import { cropList } from '../../tools';
import Loading from '../loading/loading';

function Catalog(): JSX.Element {
  const {films, genre, isDataLoaded} = useAppSelector((state) => state);
  const [part, setPart] = useState(1);
  const [shownCards, setShownCards] = useState(cropList(films, PAGE_LIMIT));
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleClick = () => setPart(1 + part);

  useEffect(() => {
    setPart(1);
  }, [films]);

  useEffect(() => {
    const amount = part * PAGE_LIMIT;
    setShownCards(cropList(films, amount));
    setIsButtonVisible(amount <= films.length);
  }, [part, films]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Genres active={genre} />
      {isDataLoaded ? <FilmsList films={shownCards}/> : <Loading />}
      {isButtonVisible ? <ButtonMore onClick={handleClick}/> : ''}
    </section>
  );
}

export default Catalog;
