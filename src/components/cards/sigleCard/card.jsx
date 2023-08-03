import styles from './card.module.css'

function Card ( { title, desc, img } ) {
    return (
        <div className={styles.cardContainer}>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Card