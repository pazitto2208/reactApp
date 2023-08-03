import { useEffect, useState } from 'react'
import styles from './message.module.css'

function Message ({type, msg}) {

    const [visible, setVisible] = useState(true)

    useEffect(() => {
        // non ho messaggio visible False
        if(!msg) {
            setVisible(false)
            return
        }

        // altrimenti visible true  ...
        setVisible(true)

        // ... stampo messaggio per 3 secondi 
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    },[msg])

    return (
        // fragment <> ... </> mi permette di stampare soltanto a seconda della condizione senza occuppare spazio 
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    <p>{msg}</p>
                </div>
            )}
        </>
    )
}

export default Message