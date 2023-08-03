import styles from './projectCard.module.css'
import { BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ProjectCard ({id, name, budget, category, handleRemove}) {

    const deleteProject = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Budget</span> ${budget}
            </p>
            <p className={styles.categoryText}>
                <span className={`${styles[category.name.toLowerCase()]}`}></span> {category.name}
            </p>
            <div className={styles.projectCardActions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Edit
                </Link>
                <button onClick={deleteProject}>
                    <BsFillTrashFill /> Delete
                </button>
            </div>
        </div>
    )
}

export default ProjectCard