import type { Match } from '../../types/match'
import PendingData from '../PendingData/PendingData'
import styles from './MatchCard.module.css'

interface MatchCardProps {
  match: Match
}

const stageLabels: Record<Match['stage'], string> = {
  group: 'Fase de Grupos',
  round16: 'Octavos de Final',
  quarterfinal: 'Cuartos de Final',
  semifinal: 'Semifinal',
  bronze: 'Tercer Puesto',
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function MatchCard({ match }: MatchCardProps) {
  const isWin = match.scoreSpain !== null && match.scoreOpponent !== null && match.scoreSpain > match.scoreOpponent
  const isLoss = match.scoreSpain !== null && match.scoreOpponent !== null && match.scoreSpain < match.scoreOpponent

  return (
    <div className={`${styles.card} ${isWin ? styles.win : ''} ${isLoss ? styles.loss : ''}`}>
      <div className={styles.stage}>{stageLabels[match.stage]}</div>
      <div className={styles.date}>{formatDate(match.date)}</div>
      <div className={styles.matchup}>
        <div className={styles.team}>
          <span className={styles.teamName}>España</span>
          <span className={styles.score}>
            {match.scoreSpain !== null ? match.scoreSpain : <PendingData />}
          </span>
        </div>
        <div className={styles.vs}>vs</div>
        <div className={styles.team}>
          <span className={styles.teamName}>{match.opponent}</span>
          <span className={styles.score}>
            {match.scoreOpponent !== null ? match.scoreOpponent : <PendingData />}
          </span>
        </div>
      </div>
      {match.venue && <div className={styles.venue}>{match.venue}</div>}
    </div>
  )
}

export default MatchCard
