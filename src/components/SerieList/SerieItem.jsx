import { useState } from 'react';

function SerieItem({ serie, onExcluir, onEditar }) {
  const [isEditing, setIsEditing] = useState(false);

  const [tempData, setTempData] = useState({ ...serie });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value });
  };

  const handleSalvar = () => {
    onEditar(serie.id, tempData);
    setIsEditing(false);
  };

  const handleCancelar = () => {
    setTempData({ ...serie }); 
    setIsEditing(false);
  };

  return (
    <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
      {isEditing ? (
        <div>
            <p>Editando a série: {tempData.titulo}</p>
            <input name="titulo" value={tempData.titulo} onChange={handleChange} placeholder="Título" />
            <input name="numeroTemporadas" type="number" value={tempData.numeroTemporadas} onChange={handleChange} placeholder="Número de Temporadas"/>
            <input name="dataLancamento" type="date" value={tempData.dataLancamento} onChange={handleChange} placeholder="Data de Lançamento"  />
            <input name="diretor" value={tempData.diretor} onChange={handleChange} placeholder="Diretor" />
            <input name="produtora" value={tempData.produtora} onChange={handleChange} placeholder="Produtora" />
            <input name="categoria" value={tempData.categoria} onChange={handleChange} placeholder="Categoria" />
            <input name="dataAssistido" type="date" value={tempData.dataAssistido} onChange={handleChange} placeholder="Data que foi Assistido" />
            
            <div style={{ marginTop: '10px' }}>
                <button onClick={handleSalvar}>Confirmar</button>
                <button onClick={handleCancelar}>Cancelar</button>
            </div>
        </div>
      ) : (
        <div>
            <strong>{serie.titulo}</strong> - {serie.numeroTemporadas} temporadas
    
            <p>
                <small>
                    <strong>Lançamento:</strong> {serie.dataLancamento} | 
                    <strong> Diretor:</strong> {serie.diretor} | 
                    <strong> Produtora:</strong> {serie.produtora}
                </small>
            </p>
    
            <p>
                <small>
                    <strong>Categoria:</strong> {serie.categoria} | 
                    <strong> Assistido em:</strong> {serie.dataAssistido}
                </small>
            </p>
    
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => onExcluir(serie.id)}>Excluir</button>
        </div>
        )}
    </li>
  );
}

export default SerieItem;