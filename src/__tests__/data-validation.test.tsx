import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Players from '../pages/Players/Players'
import TournamentPath from '../pages/TournamentPath/TournamentPath'
import data from '../data/data.json'

describe('Data Validation', () => {
  describe('TBD Placeholders', () => {
    it('renders PendingData for any [TBD] player fields', () => {
      const tbdPlayers = data.roster.filter(
        (player) =>
          player.name === '[TBD]' ||
          player.position === '[TBD]' ||
          player.club === '[TBD]' ||
          player.note === '[TBD]'
      )

      if (tbdPlayers.length > 0) {
        render(
          <BrowserRouter>
            <Players />
          </BrowserRouter>
        )
        const pendingElements = screen.getAllByText('Dato pendiente')
        expect(pendingElements.length).toBeGreaterThan(0)
      }
    })

    it('all roster data is populated (no [TBD] values)', () => {
      data.roster.forEach((player) => {
        expect(player.name).not.toBe('[TBD]')
        expect(player.position).not.toBe('[TBD]')
        expect(player.club).not.toBe('[TBD]')
        expect(player.note).not.toBe('[TBD]')
      })
    })

    it('all match data is populated (no null scores)', () => {
      data.matches.forEach((match) => {
        expect(match.scoreSpain).not.toBeNull()
        expect(match.scoreOpponent).not.toBeNull()
      })
    })
  })

  describe('No Invented Data', () => {
    it('all match scores come from data.json', () => {
      render(
        <BrowserRouter>
          <TournamentPath />
        </BrowserRouter>
      )

      data.matches.forEach((match) => {
        if (match.scoreSpain !== null) {
          const elements = screen.getAllByText(match.scoreSpain.toString())
          expect(elements.length).toBeGreaterThan(0)
        }
        if (match.scoreOpponent !== null) {
          const elements = screen.getAllByText(match.scoreOpponent.toString())
          expect(elements.length).toBeGreaterThan(0)
        }
      })
    })

    it('all player names come from data.json', () => {
      render(
        <BrowserRouter>
          <Players />
        </BrowserRouter>
      )

      data.roster.forEach((player) => {
        expect(screen.getByText(player.name)).toBeDefined()
      })
    })
  })
})
