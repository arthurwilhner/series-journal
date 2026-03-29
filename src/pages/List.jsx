import { useState, useEffect } from 'react';
import api from '../services/api';
import SerieItem from '../components/SerieList/SerieItem';

function Lista() {
  const [series, setSeries] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');

  useEffect(() => {
    carregarSeries();
  }, []);

  const carregarSeries = async () => {
    try {
      const response = await api.get('/series'); // Rota GET: /series
      setSeries(response.data);
    } catch (error) {
      console.error("Erro ao buscar séries:", error);
    }
  };

  const excluirSerie = async (id) => {
    try {
      await api.delete(`/series/${id}`); // Rota DELETE: /series/:id
      setSeries(series.filter(serie => serie.id !== id));
    } catch (error) {
      console.error("Erro ao excluir série:", error);
    }
  };

  const editarSerie = async (id, serieAtualizada) => {
    try {
      const response = await api.put('/series', serieAtualizada); 
      setSeries(series.map(serie => serie.id === id ? response.data : serie));
    } catch (error) {
      console.error("Erro ao editar série:", error);
      alert("Erro ao editar a série. Verifique o console.");
    }
  };

  
  const seriesFiltradas = (Array.isArray(series) ? series : []).filter((serie) => {
    const tituloSeguro = serie.titulo || ""; // Se não tiver título, usa uma string vazia
    return tituloSeguro.toLowerCase().includes(termoBusca.toLowerCase());
  });

  return (
    <div>
      <h2 className="mb-4">Minhas Séries</h2>
      <div className="mb-4">
        <input 
          type="text" 
          className="form-control"
          placeholder="Filtrar por título..." 
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>
      
      {seriesFiltradas.length === 0 ? (
        <div className="alert alert-info">Nenhuma série encontrada.</div>
      ) : (
        <ul className="list-group">
          {seriesFiltradas.map(serie => (
            <SerieItem 
              key={serie.id} 
              serie={serie} 
              onExcluir={excluirSerie} 
              onEditar={editarSerie}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;