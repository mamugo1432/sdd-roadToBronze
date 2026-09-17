import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MatchCard from './MatchCard'
import type { Match } from '../../types/match'

const mockMatchComplete: Match = {
  id: 'group-1',
  stage: 'group',
  date: '2026-09-04',
  opponent: 'Alemania',
  scoreSpain: 83,
  scoreOpponent: 53,
  venue: 'Berlin Arena',
}

const mockMatchPending: Match = {
  id: 'group-2',
  stage: 'group',
  date: '2026-09-05',
  opponent: 'Mali',
  scoreSpain: null,
  scoreOpponent: null,
}

const mockMatchLoss: Match = {
  id: 'semifinal-1',
  stage: 'semifinal',
  date: '2026-09-12',
  opponent: 'Estados Unidos',
  scoreSpain: 66,
  scoreOpponent: 76,
  venue: 'Berlin Arena',
}

describe('MatchCard', () => {
  it('renders stage label', () => {
    render(<MatchCard match={mockMatchComplete} />)
    expect(screen.getByText('Fase de Grupos')).toBeDefined()
  })

  it('renders opponent name', () => {
    render(<MatchCard match={mockMatchComplete} />)
    expect(screen.getByText('Alemania')).toBeDefined()
  })

  it('renders scores when available', () => {
    render(<MatchCard match={mockMatchComplete} />)
    expect(screen.getByText('83')).toBeDefined()
    expect(screen.getByText('53')).toBeDefined()
  })

  it('renders PendingData for missing scores', () => {
    render(<MatchCard match={mockMatchPending} />)
    const pendingElements = screen.getAllByText('Dato pendiente')
    expect(pendingElements.length).toBe(2)
  })

  it('renders venue when available', () => {
    render(<MatchCard match={mockMatchComplete} />)
    expect(screen.getByText('Berlin Arena')).toBeDefined()
  })

  it('applies win class for victories', () => {
    const { container } = render(<MatchCard match={mockMatchComplete} />)
    const className = (container.firstChild as HTMLElement).className
    expect(className).toMatch(/win/)
  })

  it('applies loss class for defeats', () => {
    const { container } = render(<MatchCard match={mockMatchLoss} />)
    const className = (container.firstChild as HTMLElement).className
    expect(className).toMatch(/loss/)
  })

  it('renders semifinal stage label', () => {
    render(<MatchCard match={mockMatchLoss} />)
    expect(screen.getByText('Semifinal')).toBeDefined()
  })
})
