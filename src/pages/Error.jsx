import {Link} from "react-router-dom";

function Error() {
  return (
      <section id="error" className="error-container">
        <h1 className="error-title">404</h1>
        <p className="error-paragraphe">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error-link">
          Retourner sur la page d’accueil
        </Link>
      </section>
  )
}

export default Error