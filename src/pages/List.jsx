import { useState } from 'react';
import SerieItem from '../components/SerieList/SerieItem';

function Lista({ series, onExcluir, onEditar }) {
  
  const [termoBusca, setTermoBusca] = useState('');

  
  const seriesFiltradas = series.filter((serie) => 
    serie.titulo.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div>
      <h1>Minhas Séries:</h1>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Filtrar por título..." 
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>
      
      {seriesFiltradas.length === 0 ? (
        <p>{termoBusca ? "Nenhuma série encontrada." : "Nenhuma série cadastrada."}</p>
      ) : (
        <ul>
          {seriesFiltradas.map(serie => (
            <SerieItem 
              key={serie.id} 
              serie={serie} 
              onExcluir={onExcluir} 
              onEditar={onEditar}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;