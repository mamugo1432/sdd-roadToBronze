// Source: FIBA (fiba.basketball) and FEB (feb.es)
export interface Match {
  id: string
  stage: 'group' | 'round16' | 'quarterfinal' | 'semifinal' | 'bronze'
  date: string
  opponent: string
  scoreSpain: number | null
  scoreOpponent: number | null
  venue?: string
  source?: string
}
