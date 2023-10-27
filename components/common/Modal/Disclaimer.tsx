import { DisclaimerI } from '@/interfaces'

const DisclaimerModal = ({
    message
}: DisclaimerI) => {
    return (
        <div
            className='text-xl py-4 w-64'
        >{ message }</div>
    )
}

export default DisclaimerModal