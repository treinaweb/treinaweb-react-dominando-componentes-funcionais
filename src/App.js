import { useState, useEffect } from 'react';

function Treinaweb(props) {
    useEffect(() => {
        console.log('COMPONENTE CRIADO');
        return () => {
            console.log('COMPONENTE REMOVIDO');
        };
    }, []);

    return (
        <div>
            <span>TreinaWeb - {props.nome}</span>
        </div>
    );
}

function App() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>
                CLICK 1 - {contador}
            </button>
            {contador % 2 === 0 && <Treinaweb nome={contador} />}
        </div>
    );
}

export default App;
