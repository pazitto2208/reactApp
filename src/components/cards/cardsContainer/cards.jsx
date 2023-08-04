import styles from './cards.module.css'
import Card from '../sigleCard/card'

function Cards () {
    let cards = [
        {
            title: 'Organizza i tuoi progetti',
            desc: 'Con Costs, puoi creare progetti personali con titoli e descrizioni uniche. Organizza i tuoi progetti in categorie diverse per una migliore strutturazione',
            img: 'https://toggl.com/blog/wp-content/uploads/2018/09/project-task-list.jpg'
        },
        {
            title: 'Monitoraggio delle spese',
            desc: ' Registra tutte le tue spese associate a ciascun progetto. Costs ti fornirà una panoramica chiara e dettagliata delle tue finanze in tempo reale',
            img: 'https://www.worktogether.it/Newsdoc/News540/il-potere-del-time-budget.jpg'
        },
        {
            title: 'Sincronizzazione',
            desc: 'Mantieni i tuoi dati al sicuro con il backup automatico e la sincronizzazione su cloud. Puoi accedere ai tuoi progetti ovunque ti trovi',
            img: 'https://www.penso.com.br/wp-content/uploads/2013/06/cloud-backup.png'
        }
    ]

    return (
        <>
            <div className={styles.cardsContainer}>
                {/* !!! KEY is IMPORTANT */}
                {cards.length > 0 && cards.map((card, index) => (
                    <Card
                        key={index}
                        title = {card.title}
                        desc = {card.desc}
                        img = {card.img} 
                    />
                ))}
            </div>
        </>

    )
}

export default Cards