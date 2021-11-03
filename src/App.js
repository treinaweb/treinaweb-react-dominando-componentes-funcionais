const MeusComponentes = {
    Treinaweb: function () {
        return <div>Olá</div>;
    },
    Treinaweb2: function () {
        return <div>Olá22222</div>;
    },
};

function App() {
    const nomeComponente = 'Treinaweb2';
    const ComponenteEscolhido = MeusComponentes[nomeComponente];

    return (
        <div>
            <ComponenteEscolhido />
        </div>
    );
}

export default App;
