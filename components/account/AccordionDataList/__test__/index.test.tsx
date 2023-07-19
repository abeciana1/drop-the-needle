import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccordionDataList } from '@/components/account'
import { HiOutlineUserCircle } from 'react-icons/hi'

const users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "John" },
    { id: 3, name: "Jane" },
]

const renderedComponent = () => {
    render(
        <AccordionDataList
            icon={HiOutlineUserCircle}
            heading='Participant list'
            dataSource={users}
            size='md'
            property='name'
        />
    )
}

describe('AccordionDataList', () => {
    test('> render successfully', () => {
        renderedComponent()
        const accordion = screen.getByTestId("accordion-data-list")
        expect(accordion).toBeInTheDocument()
    })
    test('> renders list when user clicks', async () => {
        renderedComponent()
        const accordion = screen.getByRole('button', {
            name: /participant list/i
        })
        await userEvent.click(accordion)
        const dataList = screen.getByRole('list')
        expect(dataList).toBeInTheDocument()
        expect(dataList.children).toHaveLength(3)
    })
})