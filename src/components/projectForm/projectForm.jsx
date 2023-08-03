import { useEffect, useState } from 'react'

import Input from '../form/input/input'
import Select from '../form/select/select'
import SubmitBtn from '../form/submitBtn/submitBtn'
import styles from './projectForm.module.css'

function ProjectForm ({btnText, handleSubmit, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json()) // trasformo quello che ricevo in json 
        .then((data) => {
            setCategories(data) // assegno a setCategories i dati ricevuti
        })
        .catch((err) => console.log(err))    
    }, [])


    // onSubmit
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project) // eseguo handleSubmit e passo il progetto che e' stato creato 
    }

    // metodo dinamico per cambiare le props dell'input
    function handleInput(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleSelect(e) {
        setProject(
            {
                ...project, 
                category: {
                    id: e.target.value,
                    name: e.target.options[e.target.selectedIndex].text
                }  
            })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text='Come si chiama il tuo nuovo progetto?'
                name='name'
                placeHolder='Inserire nome del progetto'
                handleOnChange={handleInput}
                value={project.name ? project.name : ''}
            />
            <Input 
                type='number'
                text='Quanto vuoi investire nel nuovo progetto?'
                name='budget'
                placeHolder='Inserire quota di investimento'
                handleOnChange={handleInput}
                value={project.budget}
            />
            <Select 
                name='categoryId' 
                text='Scegli la categoria' 
                options={categories}
                handleOnChange={handleSelect}
                value={project.category ? project.category.id : ''}
            />
            <SubmitBtn text={btnText} />
        </form>
    )
}

export default ProjectForm