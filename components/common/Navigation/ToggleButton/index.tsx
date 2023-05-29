import { Squash as Hamburger } from 'hamburger-react'
import { ToggleButtonI } from '@/interfaces'

const ToggleButton = ({
    isOpen,
    setOpen
}: ToggleButtonI) => {
    return (
        <div data-testid='hamburger-btn' className='absolute top-5 right-5'>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color='#343434'
            />
        </div>
    )
}

export default ToggleButton