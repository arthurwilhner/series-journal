import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Sobre from './pages/About';
import Registro from './pages/Cadastro';
import Lista from './pages/List';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastro" element={<Registro />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;