import cx from 'classnames'
import { FaArrowRight } from 'react-icons/fa'
import {
    EventOnClickBtnI,
    OnClickButtonI
} from '@/interfaces'

export const EventClickButton = ({
    text,
    ctaArrow,
    bgColor,
    onClick
}: EventOnClickBtnI) => {
    return (
        <button
            onClick={(e: any) => onClick(e)}
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
                    <FaArrowRight title='cta-arrow' className='ml-2' />
                </span>
            }
        </button>
    )
}

export const OnClickButton = ({
    text,
    bgColor,
    ctaArrow,
    onClick
}: OnClickButtonI) => {

    const toggle = (e: React.KeyboardEvent<HTMLElement>) => {
        if(e.code === "Enter" || e.keyCode === 13) {
            onClick
        }
    }

    return (
        <button
            tabIndex={0}
            onKeyDown={toggle}
            onClick={onClick}
            className={cx('flex flex-row w-fit items-center text-xl font-medium px-3 py-1 rounded-lg', {
                ['text-altWhite bg-altBlack']: bgColor === 'altBlack',
                ['text-altBlack bg-altWhite']: bgColor === 'altWhite',
                ['text-altWhite bg-vermillion']: bgColor === 'vermillion',
                ['text-altBlack bg-gold']: bgColor === 'gold',
                ['text-altWhite bg-ceruleanBlue']: bgColor === 'ceruleanBlue'
            })}
        >
            {text}
            {ctaArrow &&
                <span>
                    <FaArrowRight title='cta-arrow' className='ml-2' />
                </span>
            }
        </button>
    )
}