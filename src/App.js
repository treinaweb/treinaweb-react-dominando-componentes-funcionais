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

    function handleClick() {
        console.log('OLAAAA');
    }

    return (
        <div>
            <Treinaweb nome={contador} /> {contador}
            <button onClick={handleClick}>CLICK</button>
        </div>
    );
}

export default App;
