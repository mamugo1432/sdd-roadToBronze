import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Home from './Home'

describe('Home', () => {
  it('renders main title', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Road to Bronze')).toBeDefined()
  })

  it('renders subtitle in Spanish', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('España — Copa del Mundo FIBA 2026')).toBeDefined()
  })

  it('renders description about bronze medal', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText(/medalla de bronce/)).toBeDefined()
  })

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Recorrido del Torneo')).toBeDefined()
    expect(screen.getByText('Conoce a las Jugadoras')).toBeDefined()
  })
})
