function Treinaweb(props) {
    return (
        <ul>
            <li>{props.nome}</li>
            <li>{props.sobrenome}</li>
            <li>{props.idade}</li>
        </ul>
    );
}

function App() {
    const pessoa = {
        nome: 'Mario',
        sobrenome: 'Souza',
        idade: 25,
    };

    return (
        <div>
            <Treinaweb {...pessoa} />
        </div>
    );
}

export default App;
