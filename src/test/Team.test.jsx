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

describe('Team component - Dalton B. Mangrum bio text', () => {
  it('renders the updated bio text for Dalton B. Mangrum', () => {
    render(<Team />)
    expect(
      screen.getByText(
        'Seasoned software professional with 25 years of experience, spanning multiple industries.',
      ),
    ).toBeTruthy()
  })

  it('does not render the old bio text for Dalton B. Mangrum', () => {
    render(<Team />)
    expect(
      screen.queryByText(
        'Former VP Engineering at Google. 20 years building and scaling technology organizations.',
      ),
    ).toBeNull()
  })
})

describe('Team component - other leadership bios unchanged', () => {
  it('renders Marcus Webb bio unchanged', () => {
    render(<Team />)
    expect(
      screen.getByText(
        'Ex-principal architect at AWS. Designed systems processing trillions of requests per year.',
      ),
    ).toBeTruthy()
  })

  it('renders Priya Sharma bio unchanged', () => {
    render(<Team />)
    expect(
      screen.getByText(
        'Previously led product at Stripe and Figma. Passionate about intuitive, high-impact software.',
      ),
    ).toBeTruthy()
  })

  it('renders Jordan Rivera bio unchanged', () => {
    render(<Team />)
    expect(
      screen.getByText(
        'Built engineering teams from 0 to 500 at two unicorn startups. Expert in distributed systems.',
      ),
    ).toBeTruthy()
  })

  it('renders Kai Nakamura bio unchanged', () => {
    render(<Team />)
    expect(
      screen.getByText(
        'PhD from MIT CSAIL. Published researcher in ML systems and practical AI deployment.',
      ),
    ).toBeTruthy()
  })

  it('renders Sofia Andrade bio unchanged', () => {
    render(<Team />)
    expect(
      screen.getByText(
        'Former Creative Director at Pentagram. Brings world-class design thinking to enterprise products.',
      ),
    ).toBeTruthy()
  })
})
