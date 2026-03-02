import { Link } from 'react-router-dom';

function NavBar(){
  return(
    <nav>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/Cadastro">Cadastrar Séries</Link></li>
        <li><Link to="/Lista">Lista de Séries</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;