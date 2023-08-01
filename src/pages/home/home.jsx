import Wallpaper from '../../components/wallpaper/wallpaper'
import styles from './home.module.css'

function Home() {
    return(
        <div className={styles.homeContainer}>
            <Wallpaper />
            <div className={styles.contentContainer}>
                <h1>ciao</h1>
            </div>
        </div>
    )
}

export default Home