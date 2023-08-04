import styles from './project.module.css'

import { v4 as uuidv4 } from 'uuid'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import ProjectForm from '../../components/projectForm/projectForm'
import ServiceForm from '../../components/serviceForm/serviceForm'

import ServiceCard from '../../components/serviceCard/serviceCard'

import Message from '../../layout/message/message'

function Project() {     
    // projectSelected is inside state, locatione and useEffect is used to get it
    const location = useLocation()

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [showServices, setShowServices] = useState(false)
    const [message, setMessage] = useState()
    const [typeMessage, setTypeMessage] = useState()

    useEffect(() => {
        setServices(project.service)
    }, [project.service])

    useEffect(() => {
        setProject(location.state)
    }, [location.state])


    let url = `http://localhost:5000/projects/${project.id}`

    function editPost (projectToBeUpdated) {
        if (projectToBeUpdated.budget < projectToBeUpdated.cost) {
            setMessage('Il costo non puo essere maggiore del budget')
            setTypeMessage('error')
        }

        fetch( url , {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectToBeUpdated)
        })
        .then(async (res) => {
            setMessage('')
            try{
                await res.json()
                .then((updatedProject) => {
                    setMessage('Progetto aggiornato')
                    setTypeMessage('success')                    
                    setProject(updatedProject)
                    setShowProjectForm(false)
                })
            }
            catch (err) {
                console.log(err)
            }
        })
        .catch((err) => console.log(err))
    }

    function newService (project) {
        let lastService = project.service[project.service.length - 1]
        lastService.id = uuidv4()

        let serviceCost = lastService.cost
        let newServiceCost = parseFloat(project.cost) + parseFloat(serviceCost)
        
        // max value validation 
        if( newServiceCost > parseFloat(project.budget)) {
            setMessage('Budget superato, il costo deve essere minore del budget')
            setTypeMessage('error')
            project.service.pop() // rimuovo project dal oggetto che verra' mandato 
            return false
        }

        project.cost = newServiceCost

        editPost(project)

        setShowServiceForm(false)
    }

    function deleteService (serviceId, cost) {

        // return only services with id different of serviceId
        let servicesUpdated = project.service.filter(
            (service) => service.id !== serviceId
        )
        console.log(servicesUpdated)

        let projectUpdated = project
        projectUpdated.service = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        editPost(projectUpdated)
    }

    function toggleProjectForm () {
    setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm () {
        setShowServiceForm(!showServiceForm)
    }

    function toggleServices () {
        setShowServices(!showServices)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.projectContainer}>
                    {message && <Message type={typeMessage} msg={message} />}
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
                                        <span>Saldo disponibile:</span> ${project.budget - project.cost}
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
                    <div className={styles.detailsContainer}>
                        <div className={styles.headerService}>
                            <h2>Aggiungi servizio</h2>
                            <button onClick={toggleServiceForm} className={styles.btn}>
                                {!showServiceForm ? 'Nuovo servizio' : 'Chiudi'}
                            </button>
                        </div>
                        <div>
                            {showServiceForm && 
                                <div className={styles.projectDetails}>
                                    <ServiceForm 
                                        handleSubmit={newService}
                                        btnText='Aggiungi servizio'
                                        projectData={project}
                                    />
                                </div>
                            }
                        </div>
                    </div>

                    <div className={styles.detailsContainer}>
                        <div className={styles.headerService}>
                            <h2>Servizi attivi</h2>
                            <button onClick={toggleServices} className={styles.btn}>
                                {!showServices ? 'Mostra servizi' : 'Chiudi'}
                            </button>
                        </div>
                        <div className={styles.serviceCards}>
                            {showServices ? (services.length > 0 ? (services.map((service) => (
                                <ServiceCard 
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    desc={service.desc}
                                    key={service.key}
                                    handleRemove={deleteService}
                                />
                            ))) : (
                                <div className={styles.servicesContainer}>
                                    <button onClick={toggleServiceForm} className={styles.btn}>
                                        {(!showServiceForm) ? 'Non ci sono servizi. Nuovo servizio' : 'Chiudi'}
                                    </button>
                                </div>
                            )) : (
                                ''
                            )}
 
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Progetto non trovato</h1>
            )}
    </>
)}

export default Project