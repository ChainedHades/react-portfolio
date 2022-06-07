import { Link } from 'react-router-dom;'
import LogoTitle from '../../assets/images/logo-m.svg';
import './index.scss';

const Home = () => {
    return(
        <div className="containter home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                Mason
                <br />
                developer
                </h1>
                <h2>Software Developer / C#/C/C++/Python/Java and Web Developer / HTML/CSS/SCSS/PHP/Javascript</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home