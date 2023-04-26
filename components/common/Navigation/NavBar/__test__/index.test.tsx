import { render, screen } from '@testing-library/react'
import NavBar from '..'

test('NavBar renders without issues', () => {
    render(<NavBar/>)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
})

test('Navbar logo renders with anchor tag pointing to homepage', () => {
    render(<NavBar/>)
    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('alt', 'Drop The Needle logo')
    expect(logo).toHaveAttribute('src', '/_next/image?url=%2Fdrop-the-needle-logo.webp&w=640&q=75')

    const link = screen.getByTitle(/navigate to homepage/i)
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'Navigate to homepage')
    expect(link).toHaveAttribute('href', '/')
})
