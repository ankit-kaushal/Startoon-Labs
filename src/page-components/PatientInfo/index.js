import styles from './styles.module.css';
import { FaUserCircle } from "react-icons/fa";

const PatientInfo = () => {
    return (
        <div className={styles.patient_info_container}>
            <div className={styles.patient_info_text}>
                <div className={styles.patient_name}>S.Meena, F/23</div>
                <div className={styles.patient_id}>Patient ID : 87 20200727153457</div>
            </div>
            <FaUserCircle className={styles.user_icon} />
        </div>
    )
}

export default PatientInfo;