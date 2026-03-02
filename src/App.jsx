import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Lista from './pages/List';
import Sobre from './pages/About';
import Registro from './pages/Cadastro';
import Home from './pages/home';
import NavBar from './components/NavBar';
import SerieItem from './components/SerieList/SerieItem';



function App () {
  const [series, setSeries] = useState([]);

  const adicionarSerie = (novaSerie) => {
    setSeries([...series, novaSerie]);
    alert("Série adicionada com sucesso!");
    console.log("Minhas séries cadastradas:", series);
  };

  const excluirSerie = (id) => {
    setSeries(series.filter(serie => serie.id !== id));
  };

  const editarSerie = (id, serieAtualizada) => {
    setSeries(series.map(serie => serie.id === id ? serieAtualizada : serie));
  };


  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Cadastro" element={<Registro aoSalvar={adicionarSerie}/>} />
        <Route path="/lista" element={
          <Lista 
            series={series} 
            onExcluir={excluirSerie} 
            onEditar={editarSerie} />
        }/>
      </Routes>
    </div>
  )
}

export default App
