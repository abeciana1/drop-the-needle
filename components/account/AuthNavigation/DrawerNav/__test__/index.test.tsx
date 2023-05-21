import { DrawerNav } from '@/components/account/AuthNavigation'
import { render, screen } from '@testing-library/react'

test('DrawerNav component renders without issues', () => {

    render(<DrawerNav/>)
    let nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
})