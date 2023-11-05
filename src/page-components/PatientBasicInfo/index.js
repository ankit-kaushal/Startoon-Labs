import styles from './styles.module.css';
import { FaPhoneAlt, FaEnvelope, FaBlind, FaSkullCrossbones, FaRegCalendarPlus } from "react-icons/fa";

const PatientBasicInfo = () => {
    return (
        <div className={styles.patient_basic_info_container}>
            <table>
                <tr>
                    <td className={styles.left_container}>Phone no.</td>
                    <td className={styles.right_container}><FaPhoneAlt className={styles.icon} /> 8022334455</td>
                </tr>
                <tr>
                    <td className={styles.left_container}>Mail ID</td>
                    <td className={styles.right_container}><FaEnvelope className={styles.icon} /> meenarabinsachin2@gmail.com</td>
                </tr>
                <tr>
                    <td className={styles.left_container}>Affected</td>
                    <td className={styles.right_container}><FaBlind className={styles.red_icon} /> Billateral</td>
                </tr>
                <tr>
                    <td className={styles.left_container}>Condition</td>
                    <td className={styles.right_container}><FaSkullCrossbones/> Ortho</td>
                </tr>
                <tr>
                    <td className={styles.left_container}>Speciality</td>
                    <td className={styles.right_container}><FaRegCalendarPlus /> Osteoarthritis</td>
                </tr>
            </table>
        </div>
    )
}

export default PatientBasicInfo;