import style from './spinner.module.css';

function Spinner(): JSX.Element {
  return <div className={style.ripple}><div></div><div></div></div>;
}

export default Spinner;
