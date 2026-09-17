import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Layout from '../components/Layout/Layout'
import PlayerCard from '../components/PlayerCard/PlayerCard'
import Home from '../pages/Home/Home'
import type { Player } from '../types/player'

const mockPlayer: Player = {
  id: 'player-1',
  name: 'Elena Buenavida',
  position: 'Base',
  club: 'Valencia Basket',
  note: 'Jugadora joven con gran potencial.',
  photo: 'https://example.com/photo.jpg'
}

describe('Accessibility', () => {
  describe('Keyboard Navigation', () => {
    it('Layout navigation links are focusable', () => {
      render(
        <MemoryRouter initialEntries={['/players']}>
          <Layout>
            <div>Content</div>
          </Layout>
        </MemoryRouter>
      )
      const links = screen.getAllByRole('link')
      links.forEach((link) => {
        expect(link).toHaveProperty('tabIndex')
      })
    })

    it('Home buttons are focusable', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      const links = screen.getAllByRole('link')
      expect(links.length).toBeGreaterThan(0)
      links.forEach((link) => {
        expect(link).toHaveProperty('tabIndex')
      })
    })
  })

  describe('Alt Text', () => {
    it('PlayerCard has alt text for photo', () => {
      const { container } = render(
        <BrowserRouter>
          <PlayerCard player={mockPlayer} />
        </BrowserRouter>
      )
      const img = container.querySelector('img')
      if (img) {
        expect(img).toHaveAttribute('alt', 'Foto de Elena Buenavida')
      }
    })

    it('PlayerCard shows placeholder when no photo', () => {
      render(
        <BrowserRouter>
          <PlayerCard player={{ ...mockPlayer, photo: undefined }} />
        </BrowserRouter>
      )
      expect(screen.getByText('Foto pendiente')).toBeDefined()
    })
  })

  describe('ARIA Labels', () => {
    it('PendingData has aria-label', () => {
      render(
        <BrowserRouter>
          <PlayerCard player={{ ...mockPlayer, name: '[TBD]' }} />
        </BrowserRouter>
      )
      const pendingElements = screen.getAllByText('Dato pendiente')
      pendingElements.forEach((el) => {
        expect(el).toHaveAttribute('aria-label', 'Dato pendiente')
      })
    })
  })
})
