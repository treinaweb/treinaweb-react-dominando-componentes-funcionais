import { useState, useEffect } from 'react';

function App() {
    const minhaLista = [
        { nome: 'João', idade: 23 },
        { nome: 'Maria', idade: 25 },
        { nome: 'Paulo', idade: 32 },
        { nome: 'Bruna', idade: 20 },
    ];

    return (
        <div>
            <ul>
                {minhaLista.map((item) => (
                    <li>
                        {item.nome} - {item.idade}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
