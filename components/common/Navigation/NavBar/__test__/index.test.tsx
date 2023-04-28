import { render, screen } from '@testing-library/react'
import NavBar from '..'
import { Context as ResponsiveContext } from 'react-responsive'


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
    expect(logo).toHaveAttribute('src', '/_next/image?url=%2Fdrop-the-needle-logo.webp&w=256&q=75')

    const link = screen.getByTitle(/navigate to homepage/i)
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'Navigate to homepage')
    expect(link).toHaveAttribute('href', '/')
})

test('[guest user && desktop] Signin link that looks like a button renders in NavBar', () => {
    const { container: desktop } = render(
        <ResponsiveContext.Provider value={{ width: 2000 }}>
            <NavBar/>
        </ResponsiveContext.Provider>
    )
    const signinLink = screen.getByRole('link', {
        name: /signin/i
    })

    expect(signinLink).toBeInTheDocument()
    expect(signinLink).toHaveAttribute('href', '/signin')
    expect(desktop).toMatchSnapshot()
})