import styles from './Timeline.module.css';

export default function Timeline(props) {
    return (
        <div className={styles['timeline-container']}>
            <div
                className={styles['timeline-line']}
                style={{ '--width': `${props.width}%` }}
            />
            <input
                type="range"
                className={styles['timeline-slider']}
                onChange={(event) => props.onChangeWidth(event.target.value)}
            />
        </div>
    );
}
