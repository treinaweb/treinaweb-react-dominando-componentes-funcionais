import { useContext } from 'react';
import { AppContext } from '../../App';
import MusicList from '../components/data-display/MusicList/MusicList';
import AudioPlayer from '../components/data-display/AudioPlayer/AudioPlayer';
import styles from './index.module.css';

export default function Index() {
    const { selectedMusic, time, setTime, selectMusic, musicList } =
        useContext(AppContext);

    return (
        <div className={styles['page-container']}>
            <MusicList
                musics={musicList}
                selectedMusic={selectedMusic}
                onSelect={selectMusic}
            />

            <AudioPlayer
                music={selectedMusic}
                onTimeChange={setTime}
                onComplete={() => console.log('FINISHED')}
            />
        </div>
    );
}
