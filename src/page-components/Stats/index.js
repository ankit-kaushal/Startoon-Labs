import styles from './styles.module.css';
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Stats = () => {
    return (
        <div className={styles.stats_container}>
            <div className={styles.header}>Goal Reached</div>
            <div className={styles.stats_bar}>
                <SemiCircleProgressBar stroke='#fcb000' strokeWidth={20} percentage={40} showPercentValue />
                <div className={styles.chart}>
                    <div className={styles.chart_box}>
                        EMG
                    </div>
                    <div className={styles.chart_box}>
                        ROM
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Stats;