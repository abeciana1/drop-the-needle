import { render, screen } from '@testing-library/react'
import { AccountDD } from '@/components/common'
import { createServer } from '@/mocks/server'
import userEvent from '@testing-library/user-event'

const renderedComponent = () => {
    const { container } = render(<AccountDD/>)
    const myAcctBtn = screen.getByRole('button', {
        name: /my account/i
    })
    return {myAcctBtn, container}
}

describe('AccountDD', () => {
    createServer([{
        method: 'get',
        path: '/api/auth/session',
        res: () => ({
            "user": {
                "name": "Alex Beciana",
                "email": "alexander.beciana@gmail.com"
            },
            "expires": "2023-08-13T21:35:07.843Z"
        })
    }])

    createServer([{
        method: 'post',
        path: '/api/auth/signout',
        res: () => ({
            "user": {}
        })
    }])

    test('> renders \'My Account\' button', async () => {
        const { myAcctBtn } = renderedComponent()
        expect(myAcctBtn).toBeInTheDocument()
    })
    test("> renders options on button click", async () => {
        const { myAcctBtn } = renderedComponent()
        await userEvent.click(myAcctBtn)
        let accountOptionList = screen.getByTestId('menu-list')
        expect(accountOptionList).toBeInTheDocument()
    })
})