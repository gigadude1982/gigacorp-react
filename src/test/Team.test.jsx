import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Team from '../components/Team'

describe('Team component - Dalton B. Mangrum LinkedIn link', () => {
  it('renders the correct LinkedIn href for Dalton B. Mangrum', () => {
    render(<Team />)
    const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i })
    const daltonLink = linkedinLinks[0]
    expect(daltonLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/daltonmangrum',
    )
  })

  it('has target="_blank" on Dalton B. Mangrum\'s LinkedIn link', () => {
    render(<Team />)
    const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i })
    const daltonLink = linkedinLinks[0]
    expect(daltonLink).toHaveAttribute('target', '_blank')
  })

  it('has rel="noopener noreferrer" on Dalton B. Mangrum\'s LinkedIn link', () => {
    render(<Team />)
    const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i })
    const daltonLink = linkedinLinks[0]
    expect(daltonLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
