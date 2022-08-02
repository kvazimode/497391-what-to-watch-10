import {Link} from 'react-router-dom';
import Footer from '../../components/footer/footer';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <section className="sign-in">
        <Link to='/' className="sign-in__btn">Return to homepage</Link><br/>
        <img src="img/404.png" alt="page not found" />
        <img src="img/obi.png" alt="the existance of page is questionable" />
      </section>
      <Footer/>
    </div>
  );
}

export default NotFound;
