import { render, screen } from '@testing-library/react'
import NavBar from '..'
import NavItem from '../../NavItem'

test('NavBar renders without issues', () => {
    render(
    <NavBar>
        <NavItem
            href='/about'
            linkText='about'
            color='altBlack'
        />
    </NavBar>)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
})
