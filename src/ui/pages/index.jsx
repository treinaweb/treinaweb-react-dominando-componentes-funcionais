import MusicList from '../components/data-display/MusicList/MusicList';

const musics = [
    {
        id: 1,
        name: 'Abc',
        artist: '123',
        time: 95,
    },
    {
        id: 2,
        name: 'Def',
        artist: '456',
        time: 168,
    },
];

export default function Index() {
    return (
        <div>
            <MusicList
                musics={musics}
                selectedMusic={musics[0]}
                onSelect={() => {}}
            />
        </div>
    );
}
