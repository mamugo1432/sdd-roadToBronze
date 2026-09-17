import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Layout from './Layout'

describe('Layout', () => {
  it('renders header with site name on non-home pages', () => {
    render(
      <MemoryRouter initialEntries={['/players']}>
        <Layout>Test content</Layout>
      </MemoryRouter>
    )
    expect(screen.getByText('Road to Bronze')).toBeDefined()
  })

  it('hides header on home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout>Test content</Layout>
      </MemoryRouter>
    )
    expect(screen.queryByText('Road to Bronze')).toBeNull()
  })

  it('renders footer with Spanish text', () => {
    render(
      <MemoryRouter initialEntries={['/players']}>
        <Layout>Test content</Layout>
      </MemoryRouter>
    )
    expect(screen.getByText('España — Copa del Mundo FIBA 2026')).toBeDefined()
  })

  it('renders children content', () => {
    render(
      <MemoryRouter initialEntries={['/players']}>
        <Layout>Test content</Layout>
      </MemoryRouter>
    )
    expect(screen.getByText('Test content')).toBeDefined()
  })

  it('renders navigation links on non-home pages', () => {
    render(
      <MemoryRouter initialEntries={['/players']}>
        <Layout>Test content</Layout>
      </MemoryRouter>
    )
    expect(screen.getByText('Recorrido del Torneo')).toBeDefined()
    expect(screen.getByText('Jugadoras')).toBeDefined()
  })
})
