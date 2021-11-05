import { useRef, useEffect } from 'react';

function App() {
    const meuVideo = useRef();

    useEffect(() => {
        console.log(meuVideo.current);
    }, []);

    return (
        <div>
            <video ref={meuVideo} />
        </div>
    );
}

export default App;
