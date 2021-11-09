import { useState } from 'react';
import MusicList from '../components/data-display/MusicList/MusicList';
import AudioPlayer from '../components/data-display/AudioPlayer/AudioPlayer';

const musics = [
    {
        id: 1,
        name: 'Abc',
        artist: '123',
        time: 95,
        url: 'musics/Shadowing.mp3',
    },
    {
        id: 2,
        name: 'Def',
        artist: '456',
        time: 168,
        url: 'musics/Stoker.mp3',
    },
];

export default function Index() {
    const [width, setWidth] = useState(20);
    return (
        <div>
            <MusicList
                musics={musics}
                selectedMusic={musics[0]}
                onSelect={() => {}}
            />

            <AudioPlayer
                music={musics[1]}
                onComplete={() => console.log('FINISHED')}
            />
        </div>
    );
}
