import { NavLink, Link } from 'react-router-dom';
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
            <NavLink to="/"  className={({ isActive }) => isActive ? "nav-link active" : "nav-link" } >
              Acceuil
            </NavLink>
            <NavLink to="/a-propos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link" } >
              A Propos
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header