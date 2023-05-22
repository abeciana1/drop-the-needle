import { SideNav } from '@/components/account/AuthNavigation'
import { render, screen } from '@testing-library/react'

test('SideNav component renders without issues', () => {
    render(<SideNav/>)
    let nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
})