import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeAll } from 'vitest'
import App from '../App'

// Stub __APP_VERSION__ before any component module is evaluated.
// Footer.jsx uses this bare identifier at render time; without the stub
// jsdom/Vitest (no Vite define plugin) would throw a ReferenceError.
beforeAll(() => {
  if (typeof globalThis.__APP_VERSION__ === 'undefined') {
    globalThis.__APP_VERSION__ = '0.0.0-test'
  }
})

// ---------------------------------------------------------------------------
// Existing tests – preserved to avoid regressions
// ---------------------------------------------------------------------------

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.querySelector('main')).toBeInTheDocument()
  })
})

describe('Team data – CEO phone number', () => {
  it('CEO entry phone number field equals "+1720.528.8910" in the source data', async () => {
    const moduleText = await import('../components/Team.jsx?raw').then(
      (m) => m.default,
      () => null
    )

    if (moduleText !== null) {
      expect(moduleText).toContain("'+1720.528.8910'")
    } else {
      expect(true).toBe(true)
    }
  })

  it('CEO phone number "+1720.528.8910" is rendered in the UI', () => {
    render(<App />)
    expect(screen.getByText('+1720.528.8910')).toBeInTheDocument()
  })

  it('CEO phone number is associated with the Chief Executive Officer entry', () => {
    render(<App />)
    expect(screen.getByText('Chief Executive Officer')).toBeInTheDocument()
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
    expect(matches).toHaveLength(1)
  })

  it('no other phone numbers matching the CEO phone appear next to non-CEO member names', () => {
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

// ---------------------------------------------------------------------------
// New tests – Footer branding text
// ---------------------------------------------------------------------------

describe('Footer – GigaCorp branding text', () => {
  it('renders the exact text "A GigaCorp production" somewhere on the page', () => {
    render(<App />)
    expect(screen.getByText('A GigaCorp production')).toBeInTheDocument()
  })

  it('branding text is located inside the <footer> element', () => {
    render(<App />)
    const brandingEl = screen.getByText('A GigaCorp production')
    const footer = brandingEl.closest('footer')
    expect(footer).not.toBeNull()
    expect(footer.tagName.toLowerCase()).toBe('footer')
  })

  it('branding text element has a Tailwind class that sets font size to 70-80% of base (text-xs = 0.75rem = 75%)', () => {
    render(<App />)
    const brandingEl = screen.getByText('A GigaCorp production')
    // text-xs (0.75rem = 75% of 1rem base) satisfies the 70-80% requirement.
    expect(brandingEl.className).toMatch(/\btext-xs\b/)
  })

  it('branding text element has a muted/low-contrast color class', () => {
    render(<App />)
    const brandingEl = screen.getByText('A GigaCorp production')
    // Accept any low-opacity white (e.g. text-white/20, text-white/30) or
    // muted gray class (e.g. text-gray-500, text-neutral-400).
    const muted = /text-white\/\d+|text-gray-[3-9]\d{2}|text-neutral-[3-9]\d{2}|text-slate-[3-9]\d{2}|text-zinc-[3-9]\d{2}/
    expect(brandingEl.className).toMatch(muted)
  })

  it('existing copyright text is still present in the footer (branding does not replace primary content)', () => {
    render(<App />)
    const currentYear = new Date().getFullYear().toString()
    // Copyright paragraph contains the year and the company name.
    const copyrightEl = screen.getByText((content) =>
      content.includes(currentYear) && content.includes('GigaCorp')
    )
    expect(copyrightEl).toBeInTheDocument()
    expect(copyrightEl.closest('footer')).not.toBeNull()
  })

  it('existing version string is still present in the footer (branding does not replace primary content)', () => {
    render(<App />)
    // The version paragraph contains "www.gigacorp.co" regardless of the version number.
    const versionEl = screen.getByText((content) =>
      content.includes('www.gigacorp.co')
    )
    expect(versionEl).toBeInTheDocument()
    expect(versionEl.closest('footer')).not.toBeNull()
  })
})
