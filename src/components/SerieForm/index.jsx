import { useState } from "react";
import api from "../../services/api"; 
import { useNavigate } from "react-router-dom";

function SerieForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titulo: '', numeroTemporadas: '', dataLancamento: '',
        diretor: '', produtora: '', categoria: '', dataAssistido: ''
    });
    
    
    const [erros, setErros] = useState({});

    const handleChanges = (evento) => {
        const { name, value } = evento.target;
        setFormData({ ...formData, [name]: value });
        
        
        if (erros[name]) {
            setErros({ ...erros, [name]: null });
        }
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        
        const novosErros = {};

        
        if(!formData.titulo) novosErros.titulo = 'O título é obrigatório';
        if(!formData.numeroTemporadas) novosErros.numeroTemporadas = 'Obrigatório';
        if(!formData.dataLancamento) novosErros.dataLancamento = 'Obrigatório';
        if(!formData.diretor) novosErros.diretor = 'Obrigatório';
        if(!formData.produtora) novosErros.produtora = 'Obrigatório';
        if(!formData.categoria) novosErros.categoria = 'Obrigatória';
        if(!formData.dataAssistido) novosErros.dataAssistido = 'Obrigatório';

        
        if(Object.keys(novosErros).length > 0){
            setErros(novosErros);
            return;
        }

        
        try {
            await api.post('/series', formData);
            alert("Série salva com sucesso!");
            navigate('/lista'); 
        } catch (error) {
            console.error("Erro ao salvar a série:", error);
            alert("Erro ao conectar com a API.");
        }
    };

    return (
        <div className="card shadow-lg border-0 mt-4 p-4">
            <h2 className="card-title text-center text-primary mb-4 fw-bold">Cadastrar Nova Série</h2>
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-12">
                        <label className="form-label">Título</label>
                        <input type="text" className={`form-control ${erros.titulo ? 'is-invalid' : ''}`} name="titulo" value={formData.titulo} onChange={handleChanges}/>
                        {erros.titulo && <div className="invalid-feedback">{erros.titulo}</div>}
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Número de Temporadas</label>
                        <input type="number" className={`form-control ${erros.numeroTemporadas ? 'is-invalid' : ''}`} name="numeroTemporadas" value={formData.numeroTemporadas} onChange={handleChanges}/>
                        {erros.numeroTemporadas && <div className="invalid-feedback">{erros.numeroTemporadas}</div>}
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Data de Lançamento</label>
                        <input type="date" className={`form-control ${erros.dataLancamento ? 'is-invalid' : ''}`} name="dataLancamento" value={formData.dataLancamento} onChange={handleChanges}/>
                        {erros.dataLancamento && <div className="invalid-feedback">{erros.dataLancamento}</div>}
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Diretor</label>
                        <input type="text" className={`form-control ${erros.diretor ? 'is-invalid' : ''}`} name="diretor" value={formData.diretor} onChange={handleChanges}/>
                        {erros.diretor && <div className="invalid-feedback">{erros.diretor}</div>}
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Produtora</label>
                        <input type="text" className={`form-control ${erros.produtora ? 'is-invalid' : ''}`} name="produtora" value={formData.produtora} onChange={handleChanges}/>
                        {erros.produtora && <div className="invalid-feedback">{erros.produtora}</div>}
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Categoria</label>
                        <input type="text" className={`form-control ${erros.categoria ? 'is-invalid' : ''}`} name="categoria" value={formData.categoria} onChange={handleChanges}/>
                        {erros.categoria && <div className="invalid-feedback">{erros.categoria}</div>}
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Data Assistido</label>
                        <input type="date" className={`form-control ${erros.dataAssistido ? 'is-invalid' : ''}`} name="dataAssistido" value={formData.dataAssistido} onChange={handleChanges}/>
                        {erros.dataAssistido && <div className="invalid-feedback">{erros.dataAssistido}</div>}
                    </div>

                    <div className="col-12 mt-4 text-center d-flex gap-3 justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg px-5">Confirmar</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-5" onClick={() => navigate('/lista')}>Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SerieForm;