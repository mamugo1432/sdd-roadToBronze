import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PlayerCard from './PlayerCard'
import type { Player } from '../../types/player'

const mockPlayerComplete: Player = {
  id: 'player-1',
  name: 'Laia Palacios',
  position: 'Base',
  club: 'Valencia Basket',
  note: 'Jugadora clave en la semifinal con un triple decisivo',
  photo: 'https://example.com/photo.jpg'
}

const mockPlayerIncomplete: Player = {
  id: 'player-2',
  name: '[TBD]',
  position: '[TBD]',
  club: '[TBD]',
  note: '[TBD]'
}

describe('PlayerCard', () => {
  it('renders player name when available', () => {
    render(<PlayerCard player={mockPlayerComplete} />)
    expect(screen.getByText('Laia Palacios')).toBeDefined()
  })

  it('renders player position when available', () => {
    render(<PlayerCard player={mockPlayerComplete} />)
    expect(screen.getByText('Posición: Base')).toBeDefined()
  })

  it('renders player club when available', () => {
    render(<PlayerCard player={mockPlayerComplete} />)
    expect(screen.getByText('Club: Valencia Basket')).toBeDefined()
  })

  it('renders player note when available', () => {
    render(<PlayerCard player={mockPlayerComplete} />)
    expect(screen.getByText('Jugadora clave en la semifinal con un triple decisivo')).toBeDefined()
  })

  it('renders PendingData for missing name', () => {
    render(<PlayerCard player={mockPlayerIncomplete} />)
    const pendingElements = screen.getAllByText('Dato pendiente')
    expect(pendingElements.length).toBeGreaterThanOrEqual(1)
  })

  it('renders PendingData for missing position', () => {
    render(<PlayerCard player={mockPlayerIncomplete} />)
    const positionElements = screen.getAllByText('Dato pendiente')
    expect(positionElements.length).toBeGreaterThanOrEqual(2)
  })

  it('renders photo when available', () => {
    const { container } = render(<PlayerCard player={mockPlayerComplete} />)
    const img = container.querySelector('img')
    expect(img).toBeDefined()
    expect(img).toHaveAttribute('alt', 'Foto de Laia Palacios')
  })

  it('renders photo placeholder when no photo', () => {
    render(<PlayerCard player={mockPlayerIncomplete} />)
    expect(screen.getByText('Foto pendiente')).toBeDefined()
  })
})
