import { useMemo } from 'react'
import MatchCard from '../../components/MatchCard/MatchCard'
import PendingData from '../../components/PendingData/PendingData'
import data from '../../data/data.json'
import type { Match } from '../../types/match'
import styles from './TournamentPath.module.css'

const stageOrder: Match['stage'][] = ['group', 'quarterfinal', 'semifinal', 'bronze']

function TournamentPath() {
  const sortedMatches = useMemo(() => {
    const matches = data.matches as Match[]
    return [...matches].sort((a, b) => {
      const aIndex = stageOrder.indexOf(a.stage)
      const bIndex = stageOrder.indexOf(b.stage)
      if (aIndex !== bIndex) return aIndex - bIndex
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
  }, [])

  return (
    <div className={styles.container}>
      <h1>Recorrido del Torneo</h1>
      <div className={styles.timeline}>
        {sortedMatches.length > 0 ? (
          sortedMatches.map((match) => (
            <div key={match.id} className={styles.timelineItem}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <MatchCard match={match} />
              </div>
            </div>
          ))
        ) : (
          <PendingData />
        )}
      </div>
    </div>
  )
}

export default TournamentPath
