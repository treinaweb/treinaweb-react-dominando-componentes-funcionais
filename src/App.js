import styles from './App.module.css';
import Index from './ui/pages/index';

function App() {
    return (
        <>
            <header className={styles['header']}>
                <h1>
                    Treina<span>Music</span>
                </h1>
            </header>
            <Index />
        </>
    );
}

export default App;
