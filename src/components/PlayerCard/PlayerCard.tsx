import type { Player } from '../../types/player'
import PendingData from '../PendingData/PendingData'
import styles from './PlayerCard.module.css'

interface PlayerCardProps {
  player: Player
}

function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        {player.photo ? (
          <img
            src={player.photo}
            alt={`Foto de ${player.name}`}
            className={styles.photo}
          />
        ) : (
          <div className={styles.photoPlaceholder}>Foto pendiente</div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>
          {player.name !== '[TBD]' ? player.name : <PendingData />}
        </h3>
        <p className={styles.position}>
          Posición: {player.position !== '[TBD]' ? player.position : <PendingData />}
        </p>
        <p className={styles.club}>
          Club: {player.club !== '[TBD]' ? player.club : <PendingData />}
        </p>
        <p className={styles.note}>
          {player.note !== '[TBD]' ? player.note : <PendingData />}
        </p>
      </div>
    </div>
  )
}

export default PlayerCard
