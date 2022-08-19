import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import FilmCard from '../../components/film-card/film-card';
import {Film} from '../../types/film';

type MyListProps = {
  films: Film[];
}

function MyList({films}: MyListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  function handlePointerOver(id: number) {
    setActiveCard(id);
  }
  function handlePointerOut() {
    setActiveCard(0);
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {films.map((item) => (
            <FilmCard
              key={item.id}
              id={item.id}
              name={item.name}
              previewImage={item.previewImage}
              previewVideoLink={item.previewVideoLink}
              isHovered={activeCard === item.id}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />)
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
