import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0 bg-dark text-light">
                <div className="card-body p-5 text-center">
                    
                    <h1 className="card-title text-primary mb-4 fw-bold display-4">
                        Series Journal
                    </h1>

                    
                    <p className="card-text fs-5 mb-5 opacity-75">
                        Sua plataforma pessoal para organizar, avaliar e acompanhar todas as séries que você assiste. 
                        Gerencie seu progresso, descubra informações e mantenha seu histórico atualizado com facilidade.
                    </p>

                    <p className="card-text fs-5 mb-5 opacity-75">
                        <strong>Utilize os nomes das Séries em inglês para garantir a melhor integração com a OMDb API e obter os posteres corretos.</strong>
                    </p>
                    
                    
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mt-4">
                        <Link to="/cadastro" className="btn btn-primary btn-lg px-4 gap-3">
                            Cadastrar Nova Série
                        </Link>
                        <Link to="/lista" className="btn btn-outline-light btn-lg px-4">
                            Visualizar Minha Lista
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;