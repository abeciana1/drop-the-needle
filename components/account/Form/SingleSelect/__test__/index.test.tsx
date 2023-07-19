import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SingleSelectField } from '@/components/account'
import {
    HiEye,
    HiEyeOff
} from 'react-icons/hi'
import { useState } from 'react'

const SingleSelectFieldComp = () => {
    const phPublishStatuses = [
        {
            status: 'Published',
            bool: true
        },
        {
            status: 'Not Published',
            bool: false
        }
    ]
    
    let currentIdx = 0
    const [ selectedPubStatus, setPubStatus ] = useState(phPublishStatuses[currentIdx])
    
    const handlePowerHourPublishStatus = () => {
        if (selectedPubStatus?.status === 'Published') {
            setPubStatus(phPublishStatuses[1])
        } else {
            setPubStatus(phPublishStatuses[0])
        }
    }
    return(
        <SingleSelectField
            icon={selectedPubStatus?.bool ? HiEye : HiEyeOff}
            labelText='Set publish status'
            dataSource={phPublishStatuses}
            property='status'
            selectedValue={selectedPubStatus}
            setSelectedValue={handlePowerHourPublishStatus}
        />
    )
}

describe('SingleSelectField', () => {
    test('> renders successfully', () => {
        render(<SingleSelectFieldComp/> )
        const selectField = screen.getByTestId('select-field')
        expect(selectField).toBeInTheDocument()
    })
    test.only('> user click changes status', async () => {
        render(<SingleSelectFieldComp/> )
        const selectField = screen.getByTestId('select-field')
        expect(selectField).toBeInTheDocument()
        const statusButton = screen.getByRole('button', {
            name: /published/i
        })
        expect(statusButton).toBeInTheDocument()
        await userEvent.click(statusButton)
        const newStatusItem = screen.getByText(/not published/i)
        expect(newStatusItem).toBeInTheDocument()
        await userEvent.click(newStatusItem)
        expect(statusButton.textContent).toBe("Not Published")
    })
})