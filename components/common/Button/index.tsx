import cx from 'classnames'
import { FaArrowRight } from 'react-icons/fa'
import {
    EventOnClickBtnI,
    OnClickButtonI,
    SubmitButtonI
} from '@/interfaces'
import { useState } from 'react'

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
        if(e.code === "Enter") {
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

export const SubmitButton = ({
    bgColor,
    text = 'Submit',
    disabled = false
}: SubmitButtonI) => {
    const [ showTooltip, setTooltip ] = useState(false)
    return(
        <div
            className='relative flex items-center max-w-content'
        >
            <button
                onMouseEnter={() => setTooltip(true)}
                onFocus={() => setTooltip(true)}
                onBlur={() => setTooltip(false)}
                onTouchStart={() => setTooltip(true)}
                onTouchCancel={() => setTooltip(false)}
                onMouseLeave={() => setTooltip(false)}
                disabled={disabled}
                className={cx('flex flex-row w-fit items-center text-xl font-medium px-3 py-1 rounded-lg', {
                    ['text-altWhite bg-altBlack']: bgColor === 'altBlack' && disabled === false,
                    ['text-altBlack bg-altWhite']: bgColor === 'altWhite' && disabled === false,
                    ['text-altWhite bg-vermillion']: bgColor === 'vermillion' && disabled === false,
                    ['text-altBlack bg-gold']: bgColor === 'gold' && disabled === false,
                    ['text-altWhite bg-ceruleanBlue']: bgColor === 'ceruleanBlue' && disabled === false,
                    ['cursor-not-allowed bg-altBlack-200 text-altBlack']: disabled
                })}
            >
                {disabled ? 'Fix errors in form' : text}
            </button>
        </div>
    )
}