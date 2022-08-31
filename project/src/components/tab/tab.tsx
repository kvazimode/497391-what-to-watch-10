import { Link } from 'react-router-dom';

type TabProps = {
  name: string;
  isActive: boolean;
  onTabClick: (arg: string) => void;
}

function Tab({name, isActive, onTabClick}: TabProps): JSX.Element {
  return (
    <li className={`film-nav__item ${isActive && 'film-nav__item--active'}`} onClick={() => onTabClick(name)}>
      <Link to={name.toLowerCase()} className="film-nav__link">{name}</Link>
    </li>
  );
}

export default Tab;
