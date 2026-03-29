import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Series Journal</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Página Inicial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro">Cadastrar Séries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lista">Lista de Séries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;