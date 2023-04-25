import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavItem from '..'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@/utils/test-utils/createMockRouter'

const renderComponent = () => {
    render(
        <RouterContext.Provider value={createMockRouter({})}>
            <NavItem
                href='/about'
                linkText='about'
                color='altBlack'
            />
        </RouterContext.Provider>
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