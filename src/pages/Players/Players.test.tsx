import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Players from './Players'

describe('Players', () => {
  it('renders page title', () => {
    render(
      <BrowserRouter>
        <Players />
      </BrowserRouter>
    )
    expect(screen.getByText('Jugadoras')).toBeDefined()
  })

  it('renders subtitle in Spanish', () => {
    render(
      <BrowserRouter>
        <Players />
      </BrowserRouter>
    )
    expect(screen.getByText('La selección española en la Copa del Mundo 2026')).toBeDefined()
  })

  it('renders 12 player cards', () => {
    render(
      <BrowserRouter>
        <Players />
      </BrowserRouter>
    )
    expect(screen.getByText('Elena Buenavida')).toBeDefined()
    expect(screen.getByText('Iyana Martín')).toBeDefined()
    expect(screen.getByText('Awa Fam')).toBeDefined()
  })
})
