import styles from './styles.module.css';
import { FaRegFileArchive } from "react-icons/fa";

const MedicalHistory = () => {
    return (
        <div className={styles.patient_info_container}>
            <table>
                <tr>
                    <td className={styles.left_container}><FaRegFileArchive /> Medical History</td>
                    <td  className={styles.right_container}>Hypertension, DM, Hypothyrodism</td>
                </tr>
            </table>
        </div>
    )
}

export default MedicalHistory;