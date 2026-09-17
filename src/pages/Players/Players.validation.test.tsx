import { describe, it, expect } from 'vitest'
import data from '../../data/data.json'

describe('Player notes validation', () => {
  it('all player notes should be 15-20 words when populated', () => {
    const populatedPlayers = data.roster.filter(
      (player) => player.note !== '[TBD]' && player.note.trim() !== ''
    )

    if (populatedPlayers.length === 0) {
      return
    }

    populatedPlayers.forEach((player) => {
      const wordCount = player.note.trim().split(/\s+/).length
      expect(wordCount).toBeGreaterThanOrEqual(15)
      expect(wordCount).toBeLessThanOrEqual(20)
    })
  })

  it('all players should have a note field', () => {
    data.roster.forEach((player) => {
      expect(player.note).toBeDefined()
      expect(typeof player.note).toBe('string')
    })
  })

  it('should have exactly 12 players in roster', () => {
    expect(data.roster.length).toBe(12)
  })
})
