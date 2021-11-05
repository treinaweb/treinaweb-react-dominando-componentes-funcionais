function App() {
    const minhaLista = [
        { nome: 'João', idade: 23 },
        { nome: 'Maria', idade: 25 },
        { nome: 'Paulo', idade: 32 },
        { nome: 'Bruna', idade: 20 },
    ];

    function falarNome(nome) {
        console.log(nome);
    }

    return (
        <div>
            <ul>
                {minhaLista.map((item, index) => (
                    <li key={index} onClick={() => falarNome(item.nome)}>
                        {item.nome} - {item.idade}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
