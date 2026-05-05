import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const baseProps = {
  category: 'Cloud Migration',
  title: 'Global Banking Platform',
  description: 'Migrated a legacy infrastructure to the cloud.',
  metrics: ['42% cost reduction', '99.99% uptime'],
  color: 'from-brand-500/20 to-purple-600/20',
  accent: 'text-brand-400',
}

describe('ProjectCard', () => {
  it('renders title, description, and metrics without an image', () => {
    render(<ProjectCard {...baseProps} />)

    expect(screen.getByText('Global Banking Platform')).toBeTruthy()
    expect(screen.getByText('Migrated a legacy infrastructure to the cloud.')).toBeTruthy()
    expect(screen.getByText('42% cost reduction')).toBeTruthy()
    expect(screen.queryByRole('img')).toBeNull()
  })

  it('renders no <img> element when image prop is absent', () => {
    render(<ProjectCard {...baseProps} />)
    expect(screen.queryByRole('img')).toBeNull()
  })

  it('renders no <img> element when image prop is null', () => {
    render(<ProjectCard {...baseProps} image={null} />)
    expect(screen.queryByRole('img')).toBeNull()
  })

  it('renders an <img> element with correct src and alt when image prop is provided', () => {
    const image = {
      url: 'https://example.com/project.png',
      alt: 'Screenshot of the banking platform',
      width: 800,
      height: 450,
    }
    render(<ProjectCard {...baseProps} image={image} />)

    const img = screen.getByRole('img', { name: 'Screenshot of the banking platform' })
    expect(img).toBeTruthy()
    expect(img.getAttribute('src')).toBe('https://example.com/project.png')
  })

  it('applies object-cover class to the <img> element when image is provided', () => {
    const image = {
      url: 'https://example.com/project.png',
      alt: 'Screenshot of the banking platform',
    }
    render(<ProjectCard {...baseProps} image={image} />)

    const img = screen.getByRole('img')
    expect(img.className).toMatch(/object-cover/)
  })

  it('applies a responsive aspect-ratio class to the image container when image is provided', () => {
    const image = {
      url: 'https://example.com/project.png',
      alt: 'Screenshot of the banking platform',
    }
    render(<ProjectCard {...baseProps} image={image} />)

    const img = screen.getByRole('img')
    const container = img.parentElement
    expect(container.className).toMatch(/aspect-/)
  })

  it('still renders title, description, and metrics alongside the image', () => {
    const image = {
      url: 'https://example.com/project.png',
      alt: 'Screenshot of the banking platform',
    }
    render(<ProjectCard {...baseProps} image={image} />)

    expect(screen.getByText('Global Banking Platform')).toBeTruthy()
    expect(screen.getByText('Migrated a legacy infrastructure to the cloud.')).toBeTruthy()
    expect(screen.getByText('42% cost reduction')).toBeTruthy()
    expect(screen.getByRole('img')).toBeTruthy()
  })
})
