import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

// ---------------------------------------------------------------------------
// Suite 1 – Basic rendering
// ---------------------------------------------------------------------------
describe('App – basic rendering', () => {
  it('renders without crashing and mounts a <main> element', () => {
    render(<App />)
    expect(document.querySelector('main')).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// Suite 2 – CEO name: acceptance criteria
// ---------------------------------------------------------------------------
describe('CEO name – Dalton B. Mangrum', () => {
  it('displays "Dalton B. Mangrum" in the rendered output', () => {
    render(<App />)
    expect(screen.getByText('Dalton B. Mangrum')).toBeInTheDocument()
  })

  it('does NOT display "Alexandra Chen" anywhere in the rendered output', () => {
    render(<App />)
    expect(screen.queryByText('Alexandra Chen')).not.toBeInTheDocument()
  })

  it('shows "Dalton B. Mangrum" as the Chief Executive Officer', () => {
    render(<App />)
    const nameEl = screen.getByText('Dalton B. Mangrum')
    // The name and role live inside the same card container
    const card = nameEl.closest('div')
    expect(card).not.toBeNull()
    expect(card.textContent).toContain('Chief Executive Officer')
  })
})

// ---------------------------------------------------------------------------
// Suite 3 – CEO LinkedIn URL: acceptance criteria
// ---------------------------------------------------------------------------
describe('CEO LinkedIn URL', () => {
  it('renders an anchor with href "https://www.linkedin.com/in/daltonmangrum"', () => {
    render(<App />)
    const link = document.querySelector(
      'a[href="https://www.linkedin.com/in/daltonmangrum"]'
    )
    expect(link).not.toBeNull()
    expect(link).toBeInTheDocument()
  })

  it('the LinkedIn anchor is associated with the CEO card', () => {
    render(<App />)
    const nameEl = screen.getByText('Dalton B. Mangrum')
    const card = nameEl.closest('div')
    const link = card
      ? card.querySelector('a[href="https://www.linkedin.com/in/daltonmangrum"]')
      : null
    expect(link).not.toBeNull()
  })

  it('no anchor with the old placeholder "#" is the CEO LinkedIn link', () => {
    render(<App />)
    // Every LinkedIn anchor inside CEO card must NOT be "#"
    const nameEl = screen.getByText('Dalton B. Mangrum')
    const card = nameEl.closest('div')
    if (card) {
      const linkedinAnchors = Array.from(card.querySelectorAll('a')).filter(
        (a) => a.textContent.trim() === 'LinkedIn'
      )
      linkedinAnchors.forEach((a) => {
        expect(a.getAttribute('href')).not.toBe('#')
      })
    }
  })
})

// ---------------------------------------------------------------------------
// Suite 4 – Teams section: combined name + URL check
// ---------------------------------------------------------------------------
describe('Teams section – CEO profile completeness', () => {
  it('CEO card in Teams section shows new name AND new LinkedIn URL together', () => {
    render(<App />)
    const section = document.querySelector('#team')
    expect(section).not.toBeNull()

    // Name is present inside the section
    expect(section.textContent).toContain('Dalton B. Mangrum')

    // LinkedIn URL is present inside the section
    const link = section.querySelector(
      'a[href="https://www.linkedin.com/in/daltonmangrum"]'
    )
    expect(link).not.toBeNull()
  })

  it('old CEO name "Alexandra Chen" is absent from the Teams section', () => {
    render(<App />)
    const section = document.querySelector('#team')
    expect(section).not.toBeNull()
    expect(section.textContent).not.toContain('Alexandra Chen')
  })
})

// ---------------------------------------------------------------------------
// Suite 5 – CEO phone number (pre-existing requirement)
// ---------------------------------------------------------------------------
describe('CEO phone number', () => {
  it('renders "+1720.528.8910" in the UI', () => {
    render(<App />)
    expect(screen.getByText('+1720.528.8910')).toBeInTheDocument()
  })

  it('phone number appears exactly once (CEO only)', () => {
    render(<App />)
    expect(screen.queryAllByText('+1720.528.8910')).toHaveLength(1)
  })

  it('phone number lives inside the CEO card alongside "Chief Executive Officer"', () => {
    render(<App />)
    const phoneEl = screen.getByText('+1720.528.8910')
    const card = phoneEl.closest('div')
    expect(card).not.toBeNull()
    expect(card.textContent).toContain('Chief Executive Officer')
  })
})

// ---------------------------------------------------------------------------
// Suite 6 – Other team members unaffected
// ---------------------------------------------------------------------------
describe('Other team members – unchanged', () => {
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

  it('CEO phone number does not appear in any non-CEO member card', () => {
    render(<App />)
    otherMembers.forEach((name) => {
      const memberEl = screen.getByText(name)
      const card = memberEl.closest('[class*="group"]') || memberEl.closest('div')
      if (card) {
        expect(card.textContent).not.toContain('+1720.528.8910')
      }
    })
  })
})
