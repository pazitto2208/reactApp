import { useNavigate } from 'react-router-dom'

import style from './newProject.module.css'
import ProjectForm from '../../components/projectForm/projectForm'

function NewProject() {

    // redirect user to other pages 
    const navigate = useNavigate()

    // metodo POST 
    function createPost(project) {
        // inizialize const and service
        // !!! MEGLIO CREARE NEL BACKEND(SE ESISTE) PER DIMINUIRE VULNERABILITA

        project.cost = 0
        project.service = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json()) // trasformo quello che ricevo in json 
        .then((data) => {
            const successMessage = 'Nuovo progetto creato!';
            navigate('/projects', { state: { message: successMessage } })
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={style.newProjectContainer}>
            <h1>Crea Nuovo Progetto</h1>
            <p>Crea il tuo nuovo progetto e poi aggiungi nuovi servizi!</p>
            <ProjectForm handleSubmit={createPost} btnText='Crea Nuovo Progetto' />
        </div>
    )
}

export default NewProject