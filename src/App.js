function Treinaweb({ nome, ...props }) {
    return (
        <div>
            <span>{nome}</span>
            <input type="text" {...props} />
        </div>
    );
}

function App() {
    const pessoa = {
        nome: 'Mario',
        value: 'Souza',
        onClick: () => {},
    };

    return (
        <div>
            <Treinaweb {...pessoa} />
        </div>
    );
}

export default App;
