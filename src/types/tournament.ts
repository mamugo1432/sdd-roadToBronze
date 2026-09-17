import type { Match } from './match'
import type { Player } from './player'

export interface Tournament {
  team: string
  year: number
  competition: string
  hostCity: string
  result: string
  matches: Match[]
  roster: Player[]
}
