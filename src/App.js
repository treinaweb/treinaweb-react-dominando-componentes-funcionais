import { useState } from 'react';

function Treinaweb(props) {
    return (
        <div>
            <span>{props.nome}</span>
        </div>
    );
}

function App() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <Treinaweb nome={contador} /> {contador}
            <button onClick={() => setContador(contador + 1)}>CLICK</button>
        </div>
    );
}

export default App;
