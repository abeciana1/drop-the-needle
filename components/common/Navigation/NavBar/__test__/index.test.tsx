import { render, screen } from '@testing-library/react'
import NavBar from '..'

test('NavBar renders without issues', () => {
    render(<NavBar/>)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
})
