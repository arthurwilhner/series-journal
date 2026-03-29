function Sobre() {
    return (
        <div className="card shadow-lg border-0 mt-5">
            <div className="card-body p-5 text-center">
                <h2 className="card-title text-primary mb-4 fw-bold">Sobre o Projeto</h2>
                
                <p className="card-text fs-5 mb-4">
                    Este é o <strong>Series Journal</strong> (Gerenciador de Séries), 
                    desenvolvido como parte da Fase 02 da disciplina de Desenvolvimento FrontEnd 
                    do curso de Análise e Desenvolvimento de Sistemas da PUCRS.
                </p>
                
                <hr className="my-4 border-secondary opacity-25" />
                
                <p className="text-light opacity-75 mb-5">
                    Aqui você pode fazer o cadastro, visualizar, editar e excluir séries assistidas. 
                    Nesta versão, a aplicação consome uma API REST para o fluxo de dados e integra-se 
                    com a OMDb API para buscar automaticamente os posteres das suas obras favoritas.
                </p>
                
                <div className="mt-4">
                    <h6 className="text-muted text-uppercase tracking-wide">Desenvolvido por</h6>
                    <span className="badge bg-primary fs-6 mt-2 px-4 py-2 rounded-pill">
                        Guilherme Arthur Wilhner
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Sobre;