import styles from './wallpaper.module.css'

function Wallpaper ( { title, titleSpan, subTitle, img } ) {
    return (
        <div className={styles.wallpaperContainer}>
            <div className={styles.wallpaperContent}>
                <h1>{title}<span>{titleSpan}</span></h1>
                <p>{subTitle}</p>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default Wallpaper