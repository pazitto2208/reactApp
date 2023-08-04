import Wallpaper from '../../components/wallpaper/wallpaper'
import Cards from '../../components/cards/cardsContainer/cards'
import LinkButton from '../../layout/linkButton/linkButton'
import styles from './home.module.css'

function Home() {
    return(
        <div className={styles.homeContainer}>
            <Wallpaper 
                title= 'Benvenuto a '
                titleSpan= 'costs'
                subTitle= 'Gestisci i tuoi progetti personali con facilità!'
                img= 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80'
            />
            <div className={styles.contentContainer}>
                <h1>Organizza, monitora e pianifica con precisione le tue attività!</h1>
                <p className={styles.contentContainer}>
                    Costs è un'applicazione innovativa e versatile progettata per aiutarti a tenere traccia di 
                    tutte le tue attività, pianificare le tue spese e raggiungere i tuoi obiettivi finanziari 
                    con facilità. Che tu stia pianificando una ristrutturazione domestica, un viaggio indimenticabile 
                    o un progetto creativo, Costs ti offre le funzionalità essenziali per mantenere tutto sotto controllo 
                    e raggiungere il successo.
                </p>
            </div>
            <div className={styles.cardsSection}>
                <div className={styles.wallpaper}>
                    <Wallpaper 
                        img= 'https://snacknation.com/wp-content/uploads/2019/06/how-to-organize-office-filing-system-1.png'
                    />
                </div>
                <div className={styles.cards}>
                    <h1>Gestisci i tuoi progetti personali in modo semplice e intelligente</h1>
                    <p>
                        Costs è un'applicazione innovativa e versatile progettata per aiutarti a tenere traccia di tutte le 
                        tue attività, pianificare le tue spese e raggiungere i tuoi obiettivi finanziari con facilità. 
                        Che tu stia pianificando una ristrutturazione domestica, un viaggio indimenticabile o un progetto 
                        creativo, con Costs e' tutto piu' facile 
                    </p>
                    <Cards />
                    <LinkButton to='/newproject' text='Nuovo Progetto' />
                </div>
            </div>
        </div>
    )
}

export default Home