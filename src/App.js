import { useState, useEffect } from 'react';

function Treinaweb(props) {
    useEffect(() => {
        const meuIntervalo = setInterval(() => {
            console.log('OLA');
        }, 2000);

        return () => {
            clearInterval(meuIntervalo);
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
