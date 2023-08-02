import Wallpaper from '../../components/wallpaper/wallpaper'
import Cards from '../../components/cards/cardsContainer/cards'
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
                <div className={styles.contentSection}>
                    <img src="https://images.pexels.com/photos/4603884/pexels-photo-4603884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <div>
                        <h2>La tua soluzione completa per gestire i progetti personali in modo semplice e intelligente!</h2>
                        <p className={styles.contentContainer}>
                            Creare i tuoi progetti è semplice e veloce: basta assegnare un titolo accattivante e una descrizione 
                            dettagliata per avere una visione chiara e completa di ciò che desideri realizzare. Organizza i tuoi 
                            progetti in categorie personalizzate, come "Casa", "Viaggi", "Hobby" o qualsiasi altra categoria che 
                            rifletta il tuo stile di vita e le tue passioni.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.cardsSection}>
                <div className={styles.wallpaper}>
                    <Wallpaper 
                        img= 'https://snacknation.com/wp-content/uploads/2019/06/how-to-organize-office-filing-system-1.png'
                    />
                </div>
                <div className={styles.cards}>
                    <h1>La tua soluzione completa per gestire i progetti personali in modo semplice e intelligente</h1>
                    <p>
                        Costs è un'applicazione innovativa e versatile progettata per aiutarti a tenere traccia di tutte le 
                        tue attività, pianificare le tue spese e raggiungere i tuoi obiettivi finanziari con facilità. 
                        Che tu stia pianificando una ristrutturazione domestica, un viaggio indimenticabile o un progetto 
                        creativo, Costs ti offre le funzionalità essenziali per mantenere tutto sotto controllo e raggiungere 
                        il successo
                    </p>
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Home