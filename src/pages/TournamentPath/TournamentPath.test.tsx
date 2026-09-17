import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import TournamentPath from './TournamentPath'

describe('TournamentPath', () => {
  it('renders page title', () => {
    render(
      <BrowserRouter>
        <TournamentPath />
      </BrowserRouter>
    )
    expect(screen.getByText('Recorrido del Torneo')).toBeDefined()
  })

  it('renders all 6 matches from data', () => {
    render(
      <BrowserRouter>
        <TournamentPath />
      </BrowserRouter>
    )
    expect(screen.getAllByText('Alemania').length).toBe(2)
    expect(screen.getByText('Mali')).toBeDefined()
    expect(screen.getByText('Japón')).toBeDefined()
    expect(screen.getByText('Australia')).toBeDefined()
    expect(screen.getByText('Estados Unidos')).toBeDefined()
  })

  it('renders stage labels for matches', () => {
    render(
      <BrowserRouter>
        <TournamentPath />
      </BrowserRouter>
    )
    expect(screen.getAllByText('Fase de Grupos').length).toBe(3)
    expect(screen.getByText('Cuartos de Final')).toBeDefined()
    expect(screen.getByText('Semifinal')).toBeDefined()
    expect(screen.getByText('Tercer Puesto')).toBeDefined()
  })
})
