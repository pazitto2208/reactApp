import styles from './projects.module.css'
import Message from '../../layout/message/message'
import LinkButton from '../../layout/linkButton/linkButton'
import ProjectCard from '../../components/projectCard/projectCard'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Projects() {
    const [projects, setProjects] = useState([])
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation();

    let message = ''

    if (location.state && location.state.message) {
        message = location.state.message;
    }

    let url = 'http://localhost:5000/projects/'
    useEffect(() => {
        fetch( url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((projects) => {
            setProjects(projects)
        })
        .catch((err) => console.log(err))
    }, [url])

    function deleteProject(projectId) {
        fetch( url + projectId, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== projectId)) // delete progetto dall'array, non serve che faccio un'altra richiesta
            setProjectMessage('Progetto eliminato correttamente')
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.projectsContainer}>
            <div className={styles.titleContainer}>
                <h1>Miei progetti</h1>
                <LinkButton to='/newproject' text='Nuovo Progetto' />
            </div>
            {message && <Message msg={message} type='success'/>}
            {projectMessage && <Message msg={projectMessage} type='success'/>}
            <div className={styles.cards}>
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category}
                        key={project.id}
                        projects={projects}
                        handleRemove={deleteProject} // passo la funzione e dopo assegno al button
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects