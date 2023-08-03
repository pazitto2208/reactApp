import styles from './projectCard.module.css'
import { BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function ProjectCard ({id, name, budget, category, handleRemove, projects}) {
    
    const navigate = useNavigate();

    const deleteProject = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    const editProject = (e) => {
        e.preventDefault()
        let projectSelected = projects.filter(project => project.id === id)
        navigate(`/project/${id}`, { state: projectSelected[0] });
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

                <button onClick={editProject}>
                    <BsPencil /> Edit
                </button>

                <button onClick={deleteProject}>
                    <BsFillTrashFill /> Delete
                </button>
            </div>
        </div>
    )
}

export default ProjectCard