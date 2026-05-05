import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Portfolio from '../components/Portfolio'

describe('Portfolio - Pitch Vault card', () => {
  it('renders a heading with text Pitch Vault', () => {
    render(<Portfolio />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const pitchVaultHeading = headings.find((h) => h.textContent === 'Pitch Vault')
    expect(pitchVaultHeading).toBeTruthy()
  })

  it('pitch-vault-desc references pitchvault.co', () => {
    render(<Portfolio />)
    const desc = screen.getByTestId('pitch-vault-desc')
    expect(desc.textContent).toMatch(/pitchvault\.co/i)
  })

  it('pitch-vault-category has text Venture Build', () => {
    render(<Portfolio />)
    const category = screen.getByTestId('pitch-vault-category')
    expect(category.textContent).toBe('Venture Build')
  })

  it('pitch-vault-category and pitch-vault-desc are within the same card', () => {
    render(<Portfolio />)
    const category = screen.getByTestId('pitch-vault-category')
    const card = category.closest('.group')
    expect(card).toBeTruthy()
    const desc = within(card).getByTestId('pitch-vault-desc')
    expect(desc).toBeTruthy()
  })
})
