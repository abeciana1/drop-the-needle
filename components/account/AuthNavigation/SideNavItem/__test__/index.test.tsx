import { render, screen } from '@testing-library/react'
import { SideNavItemLink } from '@/components/account'
import { AiFillLayout } from 'react-icons/ai'

const renderedComponent = () => {
    render(
        <SideNavItemLink
            href='dashboard'
            linkText='Dashboard'
            icon={AiFillLayout}
        />
    )
}

describe('SideNavItemLink', () => {
    test('> renders successfully', () => {
        renderedComponent()
        const link = screen.getByRole('link', {
            name: /dashboard/i
        })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/dashboard')
    })
})