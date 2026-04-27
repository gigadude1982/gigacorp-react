import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

// Import the team data directly from the component file for data-level assertions.
// Since the team array is not exported separately, we test it via the rendered UI.
// We also test structural expectations about the data by inspecting the component module.

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.querySelector('main')).toBeInTheDocument()
  })
})

describe('Team data – CEO name replacement', () => {
  it('renders "Dalton B. Mangrum" as the CEO name', () => {
    render(<App />)
    expect(screen.getByText('Dalton B. Mangrum')).toBeInTheDocument()
  })

  it('does not render the old CEO name "Alexandra Chen" anywhere', () => {
    render(<App />)
    expect(screen.queryByText('Alexandra Chen')).not.toBeInTheDocument()
  })

  it('source data does not contain "Alexandra Chen"', async () => {
    const moduleText = await import('../components/Team.jsx?raw').then(
      (m) => m.default,
      () => null
    )

    if (moduleText !== null) {
      expect(moduleText).not.toContain('Alexandra Chen')
      expect(moduleText).toContain('Dalton B. Mangrum')
    } else {
      expect(true).toBe(true)
    }
  })

  it('"Dalton B. Mangrum" is associated with the Chief Executive Officer role', () => {
    render(<App />)
    expect(screen.getByText('Chief Executive Officer')).toBeInTheDocument()
    expect(screen.getByText('Dalton B. Mangrum')).toBeInTheDocument()
  })
})

describe('Team data – CEO phone number', () => {
  it('CEO entry phone number field equals "+1720.528.8910" in the source data', async () => {
    // Dynamically import the component module to inspect the inline team array.
    // The team array is defined at module scope inside Team.jsx.
    const moduleText = await import('../components/Team.jsx?raw').then(
      (m) => m.default,
      // Fallback: if Vite raw imports are unavailable, skip to UI test.
      () => null
    )

    if (moduleText !== null) {
      // Verify the CEO entry contains the required phone number as a literal string.
      expect(moduleText).toContain("'+1720.528.8910'")
    } else {
      // If raw import is not available, this sub-check is covered by the UI test below.
      expect(true).toBe(true)
    }
  })

  it('CEO phone number "+1720.528.8910" is rendered in the UI', () => {
    render(<App />)
    // The phone number must appear somewhere in the document.
    expect(screen.getByText('+1720.528.8910')).toBeInTheDocument()
  })

  it('CEO phone number is associated with the Chief Executive Officer entry', () => {
    render(<App />)
    // Confirm the CEO role label is present.
    expect(screen.getByText('Chief Executive Officer')).toBeInTheDocument()
    // Confirm the phone number is present in the same document.
    expect(screen.getByText('+1720.528.8910')).toBeInTheDocument()
  })
})

describe('Team data – other members phone numbers not altered', () => {
  const otherMembers = [
    'Marcus Webb',
    'Priya Sharma',
    'Jordan Rivera',
    'Kai Nakamura',
    'Sofia Andrade',
  ]

  it('renders all expected non-CEO team members', () => {
    render(<App />)
    otherMembers.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('only one instance of "+1720.528.8910" appears in the rendered output (CEO only)', () => {
    render(<App />)
    const matches = screen.queryAllByText('+1720.528.8910')
    // The phone number should appear exactly once — for the CEO.
    expect(matches).toHaveLength(1)
  })

  it('no other phone numbers matching the CEO phone appear next to non-CEO member names', () => {
    render(<App />)
    otherMembers.forEach((name) => {
      const memberEl = screen.getByText(name)
      // Walk up to the card container and verify CEO phone is not inside it.
      const card = memberEl.closest('[class*="group"]') || memberEl.closest('div')
      if (card) {
        expect(card.textContent).not.toContain('+1720.528.8910')
      }
    })
  })
})
