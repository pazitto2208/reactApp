import { useState } from 'react'

import Input from '../form/input/input'
import SubmitBtn from '../form/submitBtn/submitBtn'
import styles from '../projectForm/projectForm.module.css'

function ServiceForm ({btnText, handleSubmit, projectData}) {
    const [service, setService] = useState({})

    // onSubmit push newService on projectData.services[]
    const submit = (e) => {
        e.preventDefault()
        projectData.service.push(service)
        handleSubmit(projectData)
    }

    // metodo dinamico per cambiare le props dell'input
    function handleInput(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text='Come si chiama il nuovo servizio?'
                name='name'
                placeHolder='Inserire nome del servizio'
                handleOnChange={handleInput}
            />
            <Input 
                type='number'
                text='Quale e il costo del servizio?'
                name='cost'
                placeHolder='Inserire costo'
                handleOnChange={handleInput}
            />
            <Input 
                type='text'
                text='Descrizione servizio'
                name='desc'
                placeHolder='Descrivi il servizio'
                handleOnChange={handleInput}
            />
            <SubmitBtn text={btnText} />
        </form>
    )
}

export default ServiceForm