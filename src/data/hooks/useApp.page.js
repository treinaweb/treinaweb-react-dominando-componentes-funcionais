import { useState } from 'react';

const musicList = [
    {
        id: 1,
        name: 'Shadowing',
        artist: 'Corbyn Kites',
        time: 122,
        url: 'musics/Shadowing.mp3',
    },
    {
        id: 2,
        name: 'Stoker',
        artist: 'Jingle Punks',
        time: 65,
        url: 'musics/Stoker.mp3',
    },
];

export function useApp() {
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);

    function selectMusic(music) {
        setTime(0);
        setSelectedMusic(music);
    }

    return {
        selectedMusic,
        time,
        setTime,
        selectMusic,
        musicList,
    };
}
