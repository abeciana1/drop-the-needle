import { PillTagI } from '@/interfaces'
import cx from 'classnames'

const PillTag = ({
    text,
    color
}: PillTagI) => {
    return (
        <div className='py-1'>
            <span
                className={cx('rounded-full font-medium text-lg px-2 py-0.5', {
                    ['bg-green-400 text-altBlack']: color === 'green',
                    ['bg-ceruleanBlue text-altWhite']: color === 'blue',
                    ['bg-vermillion text-altWhite']: color === 'red',
                    ['bg-altBlack-300 text-altWhite']: color === 'gray'
                })}
            >{ text }</span>
        </div>
    )
}

export default PillTag