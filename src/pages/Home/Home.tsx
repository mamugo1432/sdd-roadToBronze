import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.bgShape1} />
      <div className={styles.bgShape2} />
      <div className={styles.bgShape3} />
      <div className={styles.content}>
        <span className={styles.badge}>Bronze Medal</span>
        <h1 className={styles.title}>Road to Bronze</h1>
        <p className={styles.subtitle}>España — Copa del Mundo FIBA 2026</p>
        <div className={styles.divider} />
        <p className={styles.description}>
          España logra la medalla de bronce en la Copa del Mundo FIBA 2026
          celebrada en Berlín, consolidándose como potencia del baloncesto femenino mundial.
        </p>
        <div className={styles.actions}>
          <Link to="/tournament" className={styles.button}>
            Recorrido del Torneo
          </Link>
          <Link to="/players" className={styles.buttonSecondary}>
            Conoce a las Jugadoras
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
