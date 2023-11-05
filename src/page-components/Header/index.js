import styles from './styles.module.css';
import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div className={styles.top_bar} />
            <div className={styles.nav} >
                <FaArrowLeft></FaArrowLeft>
                <div className={styles.header}>View Patient</div>
            </div>
        </div>
    )
}

export default Header;