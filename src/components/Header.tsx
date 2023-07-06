import App from 'App.css';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
//import Nemera from '../assets/nemera.gif';
import images from '../assets/images.png';
import nem from '../assets/nem.png';

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className='navbar  navbar-expand-lg mr-40 text-bg-warning p-3'>
      {/* <img className='image' src={nem} alt='' /> */}
      <a className='navbar-brand' href='#'>
        Nemera
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='#who'>
              Who Are We
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#products'>
              Our Products
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#services'>
              Our Services
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#capabilities'>
              Our Capabilities
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#careers'>
              Careers
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#news'>
              News
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto social-list__icon'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FaLinkedin style={{ color: '#0e76a8' }} />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FaYoutube style={{ color: '#ff0000' }} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
