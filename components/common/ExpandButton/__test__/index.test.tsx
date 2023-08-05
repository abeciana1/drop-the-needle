import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
    ExpandBtn
} from '@/components/common'
import { AiFillFolderOpen } from 'react-icons/ai'

const mockOnClick = jest.fn()

const renderExpandBtn = () => {
    render(
        <ExpandBtn
            text="Test"
            icon={AiFillFolderOpen}
            backgroundColor='ceruleanBlue'
            onClick={mockOnClick}
            size={7}
        />
    )
}

describe('ExpandBtn', () => {
    test('> renders successfully', () => {
        renderExpandBtn()
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    test('> hover opens button name and onClick works', async () => {
        renderExpandBtn()
        const button = screen.getByRole('button')
        await userEvent.hover(button)
        const buttonWithText = await screen.findByRole('button', {
            name: /test/i
        })
        expect(buttonWithText).toBeInTheDocument()
        await userEvent.click(button)
        expect(mockOnClick).toHaveBeenCalled()
        expect(mockOnClick).toBeCalledTimes(1)
    })
})