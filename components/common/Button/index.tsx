import { useState } from 'react'
import cx from 'classnames'
import { FaArrowRight } from 'react-icons/fa'
import { AiOutlineCopy } from 'react-icons/ai'
import {
    EventOnClickBtnI,
    OnClickButtonI,
    SubmitButtonI,
    CopyButtonI
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
    onClick,
    icon
}: OnClickButtonI) => {
    const Icon = icon as React.ElementType

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
                ['text-altWhite bg-ceruleanBlue']: bgColor === 'ceruleanBlue',
                ['text-altBlack bg-jaffa']: bgColor === 'jaffa',
                ['text-altBlack bg-green-400']: bgColor === 'green'
            })}
        >
            {icon &&
                <Icon 
                    strokeWidth="2.5" 
                    className="h-5 w-5 mx-auto"
                />
            }
            <span className={cx({
                ['ml-2']: icon
            })}>
                {text}
            </span>
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

    return(
        <div
            className='relative flex items-center max-w-content'
        >
            <button
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
                {text}
            </button>
        </div>
    )
}

export const CopyButton = ({
    text
}: CopyButtonI) => {
    const [ copied, setCopy ] = useState(false)

    const copyHandler = () => {
        if (navigator) {
            setCopy(true)
            navigator.clipboard.writeText(text)
        }
    }

    return(
        <div className="text-center">
            <button
                onClick={copyHandler}
                className={cx('flex items-center my-5 mx-auto w-64 text-lg font-medium ring-2 ring-slate-200 py-1 px-4 rounded-lg truncate', {
                    ['justify-center bg-green-400']: copied
                })}
            >
                {!copied ? text?.substring(0,21) + '... ' : 'Copied!'}
                {!copied &&
                    <span>
                        <AiOutlineCopy
                            strokeWidth='2.5'
                            className="h-5 w-5 mx-auto ml-1.5"
                        />
                    </span>
                }
            </button>
        </div>
    )
}