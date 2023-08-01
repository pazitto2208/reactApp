import { FaFacebook, FaInstagram } from 'react-icons/fa'
import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.btns}>
                <button className={styles.buttons}><FaFacebook /></button>
                <button className={styles.buttons}><FaInstagram /></button>
            </div>
            <div className={styles.copy}>
                <p>
                    <span>myApp</span> &copy; 2023
                </p>
            </div>
        </footer>
    )
}

export default Footer