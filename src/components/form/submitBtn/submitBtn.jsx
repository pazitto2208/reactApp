import styles from './submitBtn.module.css'

function SubmitBtn ({ text }) {
    return (
        <div className={styles.btn}>
            <button className={styles.btn} >{text}</button>
        </div>
    )
}

export default SubmitBtn