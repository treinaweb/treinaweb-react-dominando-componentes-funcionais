import { useState } from 'react';

function Treinaweb(props) {
    return (
        <div>
            {props.children}
            {props.subtitulo}
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
            <Treinaweb nome={contador} subtitulo={<h3>Meu Contador</h3>}>
                <h2>Contador</h2>
            </Treinaweb>
        </div>
    );
}

export default App;
