import { useState, createContext, useContext } from 'react';

const MeuContexto = createContext({ qualquer: 0 });

function App() {
    const [contador, setContador] = useState(0);

    return (
        <MeuContexto.Provider value={{ qualquer: contador }}>
            <div>
                <button onClick={() => setContador(contador + 1)}>
                    CLICK 1 - {contador}
                </button>
                <Treinaweb />
            </div>
        </MeuContexto.Provider>
    );
}

function Treinaweb(props) {
    return (
        <div>
            <span>TreinaWeb - </span>
            <OutroComponente />
        </div>
    );
}

function OutroComponente(props) {
    const { qualquer } = useContext(MeuContexto);

    return <div>Outro Componente: {qualquer}</div>;
}

export default App;
