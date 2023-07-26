import { TextInput } from '@/components/account'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const onChangeMock = jest.fn()

describe('TextInput', () => {
    test('> should render successfully and onChange works', async () => {
        render(
            <TextInput
                name='name'
                labelText='Enter your name'
                type='text'
                fieldRequired
                placeholder='Enter your name'
                onChange={onChangeMock}
            />
        )
        const input = await screen.findByRole('textbox')
        expect(input).toBeInTheDocument()
        await userEvent.type(input, 'a')
        expect(input).toHaveDisplayValue('a')
        expect(onChangeMock).toHaveBeenCalled()
        expect(onChangeMock).toBeCalledTimes(1)
    })
})