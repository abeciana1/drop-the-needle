import { render, screen } from '@testing-library/react'
import {
    SideNavItemLink,
    SideNavItemButton
} from '@/components/account'
import { AiFillLayout, AiOutlineLogout } from 'react-icons/ai'
import userEvent from '@testing-library/user-event'

const handleSignOut = jest.fn();

const renderedLink = () => {
    render(
        <SideNavItemLink
            href='dashboard'
            linkText='Dashboard'
            icon={AiFillLayout}
        />
    )
}

const renderedBtn = () => {
    render(
        <SideNavItemButton
            text='Signout'
            icon={AiOutlineLogout}
            onClick={handleSignOut}
        />
    )
}

describe('SideNavItemLink', () => {
    test('> renders successfully', () => {
        renderedLink()
        const link = screen.getByRole('link', {
            name: /dashboard/i
        })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/dashboard')
    })
    test('> tooltip visible on hover', async () => {
        renderedLink()
        const link = screen.getByRole('link', {
            name: /dashboard/i
        })
        await userEvent.hover(link)
        const tooltip = await screen.findByTestId('tooltip')
        expect(tooltip).toBeInTheDocument()
    })
})

describe('SideNavItemButton', () => {
    test.only('> renders successfully', async () => {
        renderedBtn()
        screen.debug()
        const button = screen.getByTestId('Signout')
        expect(button).toBeInTheDocument()
        await userEvent.hover(button)
        const tooltip = await screen.findByTestId('tooltip')
        expect(tooltip).toBeInTheDocument()
        await userEvent.click(button)
        expect(handleSignOut).toBeCalled()
        expect(handleSignOut).toBeCalledTimes(1)
    })
})