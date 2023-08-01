import Wallpaper from '../../components/wallpaper/wallpaper'
import styles from './home.module.css'

function Home() {
    return(
        <div className={styles.homeContainer}>
            <Wallpaper />
            <div className={styles.contentContainer}>
                <h1>Organizza, monitora e pianifica con precisione le tue attività!</h1>
                <p className={styles.contentContainer}>
                    Costs è un'applicazione innovativa e versatile progettata per aiutarti a tenere traccia di 
                    tutte le tue attività, pianificare le tue spese e raggiungere i tuoi obiettivi finanziari 
                    con facilità. Che tu stia pianificando una ristrutturazione domestica, un viaggio indimenticabile 
                    o un progetto creativo, Costs ti offre le funzionalità essenziali per mantenere tutto sotto controllo 
                    e raggiungere il successo.
                </p>
                <h2>La tua soluzione completa per gestire i progetti personali in modo semplice e intelligente!</h2>
                <p className={styles.contentContainer}>
                Creare i tuoi progetti è semplice e veloce: basta assegnare un titolo accattivante e una descrizione 
                dettagliata per avere una visione chiara e completa di ciò che desideri realizzare. Organizza i tuoi 
                progetti in categorie personalizzate, come "Casa", "Viaggi", "Hobby" o qualsiasi altra categoria che 
                rifletta il tuo stile di vita e le tue passioni.
                </p>
            </div>
        </div>
    )
}

export default Home