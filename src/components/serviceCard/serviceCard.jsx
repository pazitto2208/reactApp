import styles from '../projectCard/projectCard.module.css'
import { BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function ServiceCard ({id, name, cost, desc, handleRemove, projects}) {
    
    const navigate = useNavigate();

    const deleteProject = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
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
                <span>Costo servizio</span> ${cost}
            </p>
            <p>
                <span>Descrizione</span> {desc}
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

export default ServiceCard