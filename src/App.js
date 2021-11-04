import { useState, useEffect } from 'react';

function Treinaweb(props) {
    return (
        <div>
            <span>{props.nome}</span>
        </div>
    );
}

function App() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        console.log(contador2);
    }, [contador2]);

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>
                CLICK 1 - {contador}
            </button>
            <button onClick={() => setContador2(contador2 + 1)}>
                CLICK 2 - {contador2}
            </button>
        </div>
    );
}

export default App;
