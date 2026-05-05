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

  it('renders an img element inside the Pitch Vault card', () => {
    render(<Portfolio />)
    const card = screen.getByTestId('pitch-vault-card')
    const img = within(card).getByRole('img')
    expect(img).toBeTruthy()
    expect(img.getAttribute('src')).toBeTruthy()
  })

  it('Pitch Vault card image has object-cover class', () => {
    render(<Portfolio />)
    const card = screen.getByTestId('pitch-vault-card')
    const img = within(card).getByRole('img')
    expect(img.className).toMatch(/object-cover/)
  })

  it('Pitch Vault card image container has an aspect-ratio class', () => {
    render(<Portfolio />)
    const card = screen.getByTestId('pitch-vault-card')
    const img = within(card).getByRole('img')
    const container = img.parentElement
    expect(container.className).toMatch(/aspect-/)
  })
})
