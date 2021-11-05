import React from 'react';

function App() {
    return (
        <div>
            <ul>
                {[1, 2, 3].map((numero) => (
                    <React.Fragment key={numero}>
                        <li>Karen</li>
                        <li>Maria</li>
                        <li>João</li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

export default App;
