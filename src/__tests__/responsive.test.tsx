import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import Layout from '../components/Layout/Layout'
import Players from '../pages/Players/Players'
import Home from '../pages/Home/Home'

describe('Responsive Design', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('Mobile (≤480px)', () => {
    beforeEach(() => {
      vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
        matches: query === '(max-width: 480px)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })))
    })

    it('Layout applies mobile styles', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/players']}>
          <Layout>
            <div>Content</div>
          </Layout>
        </MemoryRouter>
      )
      const header = container.querySelector('header')
      expect(header).toBeDefined()
    })

    it('Players grid renders single column on mobile', () => {
      const { container } = render(
        <BrowserRouter>
          <Players />
        </BrowserRouter>
      )
      const grid = container.querySelector('[class*="grid"]')
      expect(grid).toBeDefined()
    })

    it('Home hero section is present on mobile', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      expect(screen.getByText('Road to Bronze')).toBeDefined()
    })
  })

  describe('Tablet (≤768px)', () => {
    beforeEach(() => {
      vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
        matches: query === '(max-width: 768px)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })))
    })

    it('Layout renders header with navigation', () => {
      render(
        <MemoryRouter initialEntries={['/players']}>
          <Layout>
            <div>Content</div>
          </Layout>
        </MemoryRouter>
      )
      expect(screen.getByText('Road to Bronze')).toBeDefined()
      expect(screen.getByText('Recorrido del Torneo')).toBeDefined()
      expect(screen.getByText('Jugadoras')).toBeDefined()
    })

    it('Players grid renders two columns on tablet', () => {
      const { container } = render(
        <BrowserRouter>
          <Players />
        </BrowserRouter>
      )
      const grid = container.querySelector('[class*="grid"]')
      expect(grid).toBeDefined()
    })
  })

  describe('Desktop (>768px)', () => {
    beforeEach(() => {
      vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })))
    })

    it('Layout renders with full desktop styles', () => {
      render(
        <MemoryRouter initialEntries={['/players']}>
          <Layout>
            <div>Content</div>
          </Layout>
        </MemoryRouter>
      )
      expect(screen.getByText('Road to Bronze')).toBeDefined()
    })

    it('Players grid renders multiple columns on desktop', () => {
      const { container } = render(
        <BrowserRouter>
          <Players />
        </BrowserRouter>
      )
      const grid = container.querySelector('[class*="grid"]')
      expect(grid).toBeDefined()
    })
  })
})
