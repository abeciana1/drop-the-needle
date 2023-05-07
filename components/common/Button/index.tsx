import cx from 'classnames'
import { FaArrowRight } from 'react-icons/fa'
import { DefaultButtonI } from '@/interfaces'

export const DefaultButton = ({
    text,
    ctaArrow
}: DefaultButtonI) => {
    return (
        <button
            className={cx('flex flex-row w-fit items-center text-2xl font-medium px-3 py-1 rounded-lg', {
                ['text-altWhite bg-altBlack']: bgColor === 'altBlack',
                ['text-altBlack bg-altWhite']: bgColor === 'altWhite',
                ['text-altWhite bg-vermillion']: bgColor === 'vermillion',
                ['text-altBlack bg-gold']: bgColor === 'gold'
            })}
        >
            {text}
            {ctaArrow &&
                <span>
                    <FaArrowRight className='ml-2' />
                </span>
            }
        </button>
    )
}