import { useState } from 'react';
import FilmCard from '../../components/film-card/film-card';
import { Film } from '../../types/film';

type FilmListProp = {
  films: Film[];
}

function FilmsList({films}: FilmListProp): JSX.Element {
  const [, setActiveCard] = useState(0);
  function handlePointerOver(id: number) {
    setActiveCard(id);
  }
  function handlePointerOut() {
    setActiveCard(0);
  }

  return (
    <div className="catalog__films-list">
      {films.map((item) => (
        <FilmCard
          key={item.id}
          id={item.id}
          name={item.name}
          previewImage={item.previewImage}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        />)
      )}
    </div>
  );
}

export default FilmsList;
