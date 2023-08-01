import styles from './wallpaper.module.css'

function Wallpaper () {
    return (
        <div className={styles.wallpaperContainer}>
            <div className={styles.wallpaperContent}>
                <h1>Benvenuto a <span>costs</span></h1>
                <p>Gestisci i tuoi progetti personali con facilità!</p>
            </div>
            <img src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
        </div>
    )
}

export default Wallpaper