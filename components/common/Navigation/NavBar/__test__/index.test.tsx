import { render, screen } from '@testing-library/react'
import NavBar from '../'
import { Context as ResponsiveContext } from 'react-responsive'
import userEvent from '@testing-library/user-event'
import { SessionProvider } from "next-auth/react"

const session = {
    user: {
        name: 'Alex Beciana',
        email: 'alexander.beciana@gmail.com',
        image: 'https://lh3.googleusercontent.com/a/AGNmyxZLR5M3zkX59pf7YzgWV7lmrgKjEOE-NRvwbRoz=s96-c'
    },
    expires: '2023-06-07T00:45:43.741Z'
}

test('NavBar renders without issues', () => {
    render(
        <SessionProvider session={session}>
            <NavBar/>
        </SessionProvider>
    )
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
})

test('Navbar logo renders with anchor tag pointing to homepage', () => {
    render(
        <SessionProvider session={session}>
            <NavBar />
        </SessionProvider>
    )
    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('alt', 'Drop The Needle logo')
    expect(logo).toHaveAttribute('src', '/_next/image?url=%2Fdrop-the-needle-logo.webp&w=384&q=75')

    const link = screen.getByTitle(/navigate to homepage/i)
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'Navigate to homepage')
    expect(link).toHaveAttribute('href', '/')
})

test('[AUTHED USER] Signin link that looks like a button DOES NOT renders in NavBar', () => {
    render(
        <SessionProvider session={session}>
            <ResponsiveContext.Provider value={{ width: 2000 }}>
                <NavBar />
            </ResponsiveContext.Provider>
        </SessionProvider>
    )
    const signinLink = screen.queryByRole('button', {
        name: /signin/i
    })

    expect(signinLink).not.toBeInTheDocument()
})

test('hamburger button renders on mobile screens', async () => {
    render(
        <SessionProvider session={session}>
            <ResponsiveContext.Provider value={{ width: 600 }}>
                <NavBar />
            </ResponsiveContext.Provider>
        </SessionProvider>
    )

    const hamburgerBtn = screen.getByRole('button')
    expect(hamburgerBtn).toBeInTheDocument()
    userEvent.click(await hamburgerBtn)
    const menuOpenId = await screen.findByTestId('menu-open')
    expect(menuOpenId).toBeInTheDocument()
})