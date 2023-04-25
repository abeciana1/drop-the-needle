import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import NavItem from '..'

const renderComponent = () => {
    render(
        <NavItem
            href='/about'
            linkText='about'
            color='altBlack'
        />
    )

    const link = screen.getByRole('link', {
        name: /about/i
    })

    return {
        link
    }
}

test('Link renders', () => {
    const { link } = renderComponent()
    expect(link).toBeInTheDocument()
})