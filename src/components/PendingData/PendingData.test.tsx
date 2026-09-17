import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PendingData from './PendingData'

describe('PendingData', () => {
  it('renders placeholder text', () => {
    render(<PendingData />)
    expect(screen.getByText('Dato pendiente')).toBeDefined()
  })

  it('has aria-label for accessibility', () => {
    render(<PendingData />)
    const element = screen.getByLabelText('Dato pendiente')
    expect(element).toBeDefined()
  })
})
