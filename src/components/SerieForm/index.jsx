import { useState } from "react";


// Função de Estado único para o formulário
function SerieForm({ aoSalvar }){
    const [formData, setFormData] = useState({
        titulo: '',
        numeroTemporadas: '',
        dataLancamento: '',
        diretor: '',
        produtora: '',
        categoria: '',
        dataAssistido: ''
    });


    // Estado para mensagens de erro
    const [erros, setErros] = useState({});

    const handleChanges = (evento) => {
        const {name, value} = evento.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (evento) => {
        evento.preventDefault(); // Impede o reload da página

        const novosErros = {};
        
        // Validação dos campos preenchidos
        if(!formData.titulo) novosErros.titulo = 'O título é obrigatório';
        if(!formData.numeroTemporadas) novosErros.numeroTemporadas = 'O número de temporadas é obrigatório';
        if(!formData.dataLancamento) novosErros.dataLancamento = 'A data de lançamento é obrigatória';
        if(!formData.diretor) novosErros.diretor = 'O diretor é obrigatório';
        if(!formData.produtora) novosErros.produtora = 'A produtora é obrigatória';
        if(!formData.categoria) novosErros.categoria = 'A categoria é obrigatória';
        if(!formData.dataAssistido) novosErros.dataAssistido = 'A data assistida é obrigatória';

        // Se houver erros, atualiza o estado e não prossegue
        if(Object.keys(novosErros).length > 0){
            setErros(novosErros);
            return;
        }

        setErros({}); // Limpa os erros se a validação passar
        const novaSerie = { ...formData, id: Date.now()};
        aoSalvar(novaSerie);

        setFormData({titulo: '', numeroTemporadas: '', dataLancamento: '', diretor: '', produtora: '', categoria: '', dataAssistido: ''})
    };

    return (
        <form onSubmit={handleSubmit}> {/*Formulário para informações do gerenciador*/}

            <div>
                <label>Título: </label> 
                <input 
                    type="text"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChanges}
                />
                {erros.titulo && <span style={{ color: 'red', display: 'block' }}>{erros.titulo}</span>}
            </div>

            <div>
                <label>Número de temporadas: </label> 
                <input 
                    type="number"
                    name="numeroTemporadas"
                    value={formData.numeroTemporadas}
                    onChange={handleChanges}
                />
                {erros.numeroTemporadas && <span style={{ color: 'red', display: 'block' }}>{erros.numeroTemporadas}</span>}
            </div>

            <div>
                <label>Data de lançamento: </label> 
                <input 
                    type="date"
                    name="dataLancamento"
                    value={formData.dataLancamento}
                    onChange={handleChanges}
                />
                {erros.dataLancamento && <span style={{ color: 'red', display: 'block' }}>{erros.dataLancamento}</span>}
            </div>

            <div>
                <label>Diretor: </label> 
                <input 
                    type="text"
                    name="diretor"
                    value={formData.diretor}
                    onChange={handleChanges}
                />
                {erros.diretor && <span style={{ color: 'red', display: 'block' }}>{erros.diretor}</span>}
            </div>

            <div>
                <label>Produtora: </label> 
                <input 
                    type="text"
                    name="produtora"
                    value={formData.produtora}
                    onChange={handleChanges}
                />
                {erros.produtora && <span style={{ color: 'red', display: 'block' }}>{erros.produtora}</span>}
            </div>

            <div>
                <label>Categoria: </label> 
                <input 
                    type="text"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChanges}
                />
                {erros.categoria && <span style={{ color: 'red', display: 'block' }}>{erros.categoria}</span>}
            </div>

            <div>
                <label>Data em que foi assistida: </label> 
                <input 
                    type="date"
                    name="dataAssistido"
                    value={formData.dataAssistido}
                    onChange={handleChanges}
                />
                {erros.dataAssistido && <span style={{ color: 'red', display: 'block' }}>{erros.dataAssistido}</span>}
            </div>
            <button type="submit">Salvar</button>
        </form>
    );

}

export default SerieForm;