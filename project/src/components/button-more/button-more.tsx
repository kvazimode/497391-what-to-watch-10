type ButtonMoreProps = {
  clickHandler: () => void;
}

function ButtonMore({clickHandler}: ButtonMoreProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={clickHandler}>Show more</button>
    </div>
  );
}

export default ButtonMore;
