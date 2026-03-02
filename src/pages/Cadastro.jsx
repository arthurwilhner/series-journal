import SerieForm from "../components/SerieForm";

function Registro({ aoSalvar }){
    return(
        <div>
            <h1>Registro de séries assistidas: </h1>
            <p>Faça o Registro de suas séries assistidas usando o formulário abaixo:</p>
            <SerieForm aoSalvar={ aoSalvar }/>
        </div>
    );
}

export default Registro;