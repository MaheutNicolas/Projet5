import { Link } from 'react-router-dom';
import { Component } from 'react';
import logo from '../../assets/image/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <Link to="/" className="header-link">
            <img src={logo} alt="Logo Kasa"/>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Acceuil</Link>
            <Link to="/a-propos" className="nav-link">A Propos</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header