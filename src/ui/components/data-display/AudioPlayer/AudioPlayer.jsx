import { useState, useRef, useEffect, useMemo } from 'react';
import styles from './AudioPlayer.module.css';
import Timeline from '../../inputs/Timeline/Timeline';

export default function AudioPlayer(props) {
    const [canPlay, setCanPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const width = useMemo(() => {
        return (currentTime / duration) * 100;
    }, [duration, currentTime]);

    const audioRef = useRef(null);

    useEffect(() => {
        if (props.music) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, props.music]);

    useEffect(() => {
        if (props.music) {
            setCurrentTime(0);
            setCanPlay(false);
        }
    }, [props.music]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setCurrentTime(audioRef.current.currentTime);
                props?.onTimeChange(audioRef.current.currentTime);
            }
        }, 500);

        return () => clearInterval(interval);
    }, [isPlaying]);

    function onCanPlay() {
        setDuration(audioRef.current.duration);
        setCanPlay(true);
    }

    function onEnded() {
        setIsPlaying(false);
        props?.onComplete();
    }

    function handlePlay() {
        if (props.music) {
            setIsPlaying(!isPlaying);
        }
    }

    function changeTime(percent) {
        if (props.music) {
            audioRef.current.currentTime = (percent / 100) * duration;
        }
    }

    return (
        <div className={styles['player-container']}>
            <div className={styles['button-container']}>
                <button
                    className={styles['play-button']}
                    onClick={handlePlay}
                    disabled={!canPlay}
                >
                    {isPlaying ? `\u2759\u2759` : `\u25B8`}
                </button>
            </div>
            <Timeline width={width} onChangeWidth={changeTime} />
            <audio
                ref={audioRef}
                src={props?.music?.url}
                controls
                onCanPlay={onCanPlay}
                onEnded={onEnded}
                className={styles['audio']}
            />
        </div>
    );
}
