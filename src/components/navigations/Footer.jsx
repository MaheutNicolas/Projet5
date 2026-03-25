import logo from '../../assets/image/white_logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} className="footer-logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer