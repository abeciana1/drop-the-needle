import { useState } from "react"
import cx from 'classnames'
import {
    ExpandButtonPropsI,
    ShareButtonPropsI
} from '@/interfaces'

export const ExpandBtn = ({
    text,
    icon,
    backgroundColor,
    onClick,
    size
}: ExpandButtonPropsI) => {

    const Icon = icon as React.ElementType

    const [open, setClose] = useState(false)
    
    const expandHandler = () => {
        if (open) {
            setClose(false)
        } else {
            setClose(true)
        }
    }

    return (
        <button
            style={ open ? {width: `${size}rem`} : {}}
            onClick={onClick}
            className={cx('py-2 hover:px-4 focus:px-4 blur:px-0 flex overflow-hidden expand-btn rounded-full items-center', {
                ['bg-ceruleanBlue text-altWhite']: backgroundColor === 'ceruleanBlue',
                ['bg-vermillion text-altWhite']: backgroundColor === 'vermillion',
                ['bg-altGreen-400 text-altWhite']: backgroundColor === 'bg-altGreen-400',
                ['rounded-lg']: open
            })}
            onMouseEnter={() => setClose(true)}
            onMouseLeave={() => setClose(false)}
            onFocus={() => setClose(true)}
            onBlur={() => setClose(false)}
        >
            <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                ['mx-auto']: open === false
            })} />
            {open &&
                <span className="font-medium ml-2 whitespace-nowrap">
                    {text}
                </span>
            }
        </button>
    )
}

export const ShareBtn = ({
    text,
    icon,
    subject,
    body,
    backgroundColor,
    sms,
    onClick,
    size
}: ShareButtonPropsI) => {

    const Icon = icon as React.ElementType

    const [open, setClose] = useState(false)
    
    const expandHandler = () => {
        if (open) {
            setClose(false)
        } else {
            setClose(true)
        }
    }

    const emailHref = `mailto:?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`

    const smsHref = `sms=?body=${body}`

    return (
        <>
        {onClick ?
            <button
                style={ open ? {width: `${size}rem`} : {}}
                onClick={onClick}
                className={cx('py-2 hover:px-4 focus:px-4 blur:px-0 flex overflow-hidden expand-btn rounded-full items-center', {
                    ['bg-ceruleanBlue text-altWhite']: backgroundColor === 'ceruleanBlue',
                    ['bg-vermillion text-altWhite']: backgroundColor === 'vermillion',
                    ['bg-yellow-300 text-altBlack']: backgroundColor === 'yellow',
                    ['bg-altGreen-400 text-altWhite']: backgroundColor === 'bg-altGreen-400',
                    ['rounded-lg']: open
                })}
                onMouseEnter={() => setClose(true)}
                onMouseLeave={() => setClose(false)}
                onFocus={() => setClose(true)}
                onBlur={() => setClose(false)}
            >
                <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                    ['mx-auto']: open === false
                })} />
                {open &&
                    <span className="font-medium ml-2 whitespace-nowrap">
                        {text}
                    </span>
                }
            </button>
        :
            <a
                style={ open ? {width: `${size}rem`} : {}}
                href={sms ? smsHref : emailHref}
                className={cx('py-2 hover:px-4 focus:px-4 blur:px-0 flex overflow-hidden expand-btn rounded-full items-center', {
                    ['bg-ceruleanBlue text-altWhite']: backgroundColor === 'ceruleanBlue',
                    ['bg-vermillion text-altWhite']: backgroundColor === 'vermillion',
                    ['bg-yellow-300 text-altBlack']: backgroundColor === 'yellow',
                    ['bg-altGreen-400 text-altWhite']: backgroundColor === 'bg-altGreen-400',
                    ['rounded-lg']: open
                })}
                onMouseEnter={() => setClose(true)}
                onMouseLeave={() => setClose(false)}
                onFocus={() => setClose(true)}
                onBlur={() => setClose(false)}
            >
                <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                    ['mx-auto']: open === false
                })} />
                {open &&
                    <span className="font-medium ml-2 whitespace-nowrap">
                        {text}
                    </span>
                }
            </a>
        }
        </>
    )
}