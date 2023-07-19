import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
    EventClickButton,
    OnClickButton
} from '@/components/common'

const testOnClick = jest.fn()

const renderEventBtn = (ctaArrowRender = true) => {
    if (ctaArrowRender) {
        render(
            <EventClickButton
                text='Test button'
                ctaArrow
                bgColor='gold'
                onClick={testOnClick}
            />
        )
    } else {
        render(
            <EventClickButton
                text='Test button'
                ctaArrow={false}
                bgColor='gold'
                onClick={testOnClick}
            />
        )
    }
}

describe('EventClickButton', () => {
    test('> renders text', () => {
        renderEventBtn()
        const button = screen.getByRole('button', {
            name: /test button/i
        })
        expect(button).toBeInTheDocument()
    })
    test('> renders right arrow', () => {
        renderEventBtn()
        const arrow = screen.getByTitle('cta-arrow')
        expect(arrow).toBeInTheDocument()
    })
    test('> does NOT render right arrow', () => {
        renderEventBtn(false)
        const arrow = screen.queryByTitle('cta-arrow')
        expect(arrow).not.toBeInTheDocument()
    })
    test('> onClick event is called when user click on button', async () => {
        renderEventBtn()
        const button = screen.getByRole('button', {
            name: /test button/i
        })
        await userEvent.click(button)
        expect(testOnClick).toBeCalled()
        expect(testOnClick).toHaveBeenCalledTimes(1)
    })
})