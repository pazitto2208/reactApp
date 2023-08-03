import styles from './project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ProjectForm from '../../components/projectForm/projectForm'

function Project() { 
    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    let url = `http://localhost:5000/projects/${id}`
    useEffect(() => {
        fetch( url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((project) => {
            setProject(project)
        })
        .catch((err) => console.log(err))
    }, [id])

    function editPost (projectToBeUpdated) {
        console.log(projectToBeUpdated)
        if (projectToBeUpdated.budget < projectToBeUpdated.cost) {

        }

        fetch( url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectToBeUpdated)
        })
        .then((updatedProject) => {
            setProject(updatedProject)
            setShowProjectForm(false)
        })
        .catch((err) => console.log(err))
    }

        function toggleProjectForm () {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.projectContainer}>
                    <div className={styles.detailsContainer}>
                        <div className={styles.titleContainer}>
                            <h1>Progetto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {!showProjectForm ? 'Modifica' : 'Chiudi'}
                            </button>
                        </div>
                        {!showProjectForm ? (
                                <div className={styles.projectDetails}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Budget inizziale:</span> ${project.budget}
                                    </p>
                                    <p>
                                        <span>Saldo:</span> ${project.budget - project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectDetails}>
                                    <ProjectForm 
                                        handleSubmit={editPost}
                                        btnText='Salva modifiche'
                                        projectData={project}
                                    />
                                </div>
                            )}
                    </div>
                </div>
            ) : (
                <h1>Progetto non trovato</h1>
            )}
    </>
)}

export default Project