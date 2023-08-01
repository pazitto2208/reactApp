import styles from './contentContainer.module.css'

function contentContainer(props) {
    return <div className={`${styles.container}`}>{props.children}</div>
}

export default contentContainer