import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

function Navbar ( { pageNavbarColor } ) {
    return (
        <nav className={`${styles.navbar} ${[pageNavbarColor]}`}>
            <div className={styles.logo}>
                <Link to='/' className={styles.item}>myLogo</Link>
            </div>

            <div className={styles.links}>
                <Link to='/' className={styles.item}>Home</Link>
                <Link to='/projects' className={styles.item}>Projects</Link>
                <Link to='/news' className={styles.item}>News</Link>
            </div>
        </nav>
    )
}

export default Navbar