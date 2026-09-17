import PlayerCard from '../../components/PlayerCard/PlayerCard'
import data from '../../data/data.json'
import styles from './Players.module.css'

function Players() {
  return (
    <div className={styles.players}>
      <h1>Jugadoras</h1>
      <p className={styles.subtitle}>La selección española en la Copa del Mundo 2026</p>
      <div className={styles.grid}>
        {data.roster.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}

export default Players
