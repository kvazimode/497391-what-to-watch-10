import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import FilmCard from '../../components/film-card/film-card';
import { useAppSelector } from '../../hooks';
import UserBlock from '../../components/user-block/user-block';

function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.favList);
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
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {films.length === 0
          ? <p>You have not added any film to favorite. Add some by pressing &apos;My list&apos; button on film page.</p>
          : (
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
          )}
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
