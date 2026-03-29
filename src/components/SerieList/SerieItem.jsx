import { useState, useEffect } from 'react';
import axios from 'axios';

function SerieItem({ serie, onExcluir, onEditar }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...serie });
  const [posterUrl, setPosterUrl] = useState('https://via.placeholder.com/100x150?text=Carregando...');

  // Busca o poster na OMDb API baseando-se no título da série
  useEffect(() => {
    const buscarPoster = async () => {
      try {
        const apiKey = '68958d8'; 
        const query = encodeURIComponent(serie.titulo);
        
        const response = await axios.get(`https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`);
        
        
        if (response.data && response.data.Poster && response.data.Poster !== 'N/A') {
          setPosterUrl(response.data.Poster);
        } else {
          
          setPosterUrl('https://via.placeholder.com/100x150?text=Sem+Poster'); 
        }
      } catch (error) {
        console.error("Erro ao buscar o poster na OMDb:", error);
        setPosterUrl('https://via.placeholder.com/100x150?text=Erro');
      }
    };

    if (serie.titulo) {
      buscarPoster();
    }
  }, [serie.titulo]);

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
    <li className="list-group-item mb-3 shadow-sm rounded border-0">
      {isEditing ? (
        <div className="p-3 border rounded bg-light">
            <h5 className="mb-3">Editando: {tempData.titulo}</h5>
            
            <div className="row g-2">
                <div className="col-md-6">
                    <input className="form-control" name="titulo" value={tempData.titulo} onChange={handleChange} placeholder="Título" />
                </div>
                <div className="col-md-6">
                    <input className="form-control" name="numeroTemporadas" type="number" value={tempData.numeroTemporadas} onChange={handleChange} placeholder="Número de Temporadas"/>
                </div>
                <div className="col-md-4">
                    <input className="form-control" name="dataLancamento" type="date" value={tempData.dataLancamento} onChange={handleChange} placeholder="Data de Lançamento"  />
                </div>
                <div className="col-md-4">
                    <input className="form-control" name="diretor" value={tempData.diretor} onChange={handleChange} placeholder="Diretor" />
                </div>
                <div className="col-md-4">
                    <input className="form-control" name="produtora" value={tempData.produtora} onChange={handleChange} placeholder="Produtora" />
                </div>
                <div className="col-md-6">
                    <input className="form-control" name="categoria" value={tempData.categoria} onChange={handleChange} placeholder="Categoria" />
                </div>
                <div className="col-md-6">
                    <input className="form-control" name="dataAssistido" type="date" value={tempData.dataAssistido} onChange={handleChange} placeholder="Data que foi Assistido" />
                </div>
            </div>
            
            <div className="mt-3 d-flex gap-2">
                <button className="btn btn-success" onClick={handleSalvar}>Confirmar</button>
                <button className="btn btn-secondary" onClick={handleCancelar}>Cancelar</button>
            </div>
        </div>
      ) : (
        <div className="d-flex p-2">
            
            <img 
              src={posterUrl} 
              alt={`Poster de ${serie.titulo}`} 
              className="rounded shadow-sm me-3" 
              style={{ width: '100px', height: '150px', objectFit: 'cover' }} 
            />

            
            <div className="flex-grow-1 d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="mb-1 text-primary">
                        {serie.titulo} 
                        <span className="badge bg-secondary ms-2 fs-6">{serie.numeroTemporadas} temporadas</span>
                    </h5>
            
                    <p className="mb-1 text-muted">
                        <small>
                            <strong>Lançamento:</strong> {serie.dataLancamento} | 
                            <strong> Diretor:</strong> {serie.diretor} | 
                            <strong> Produtora:</strong> {serie.produtora}
                        </small>
                    </p>
            
                    <p className="mb-0 text-muted">
                        <small>
                            <strong>Categoria:</strong> {serie.categoria} | 
                            <strong> Assistido em:</strong> {serie.dataAssistido}
                        </small>
                    </p>
                </div>
                
                <div className="d-flex flex-column gap-2 ms-3">
                    <button className="btn btn-outline-warning btn-sm" onClick={() => setIsEditing(true)}>Editar</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => onExcluir(serie.id)}>Excluir</button>
                </div>
            </div>
        </div>
        )}
    </li>
  );
}

export default SerieItem;