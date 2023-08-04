import { useState } from "react"
import cx from 'classnames'
import {
    ExpandButtonPropsI,
    ShareButtonPropsI
} from '@/interfaces'


export const ExpandBtn = ({
    text,
    icon,
    textColor,
    backgroundColor,
    onClick,
    addClass
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
            onClick={onClick}
            className={cx('py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center', {
                ['text-altWhite']: textColor === 'altWhite',
                ['text-royalBlue']: textColor === 'royalBlue',
                ['bg-royalBlue']: backgroundColor === 'royalBlue',
                ['bg-scarlet']: backgroundColor === 'scarlet',
                ['bg-green-400']: backgroundColor === 'bg-green-400',
                ['rounded-lg']: open,
                [addClass]: addClass
            })}
            onMouseEnter={expandHandler}
            onMouseLeave={expandHandler}
        >
            <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                ['text-altWhite']: textColor === 'altWhite',
                ['text-royalBlue']: textColor === 'royalBlue',
                ['text-coolGray']: textColor === 'coolGray',
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
    textColor,
    backgroundColor,
    sms,
    onClick
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
                onClick={onClick}
                className={cx('py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center', {
                    ['text-altWhite']: textColor === 'altWhite',
                    ['text-royalBlue']: textColor === 'royalBlue',
                    ['text-coolGray']: textColor === 'coolGray',
                    ['bg-royalBlue']: backgroundColor === 'royalBlue',
                    ['bg-scarlet']: backgroundColor === 'scarlet',
                    ['bg-yellow-300']: backgroundColor === 'yellow',
                    ['bg-green-400']: backgroundColor === 'bg-green-400',
                    ['rounded-lg']: open
                })}
                onMouseEnter={expandHandler}
                onMouseLeave={expandHandler}
            >
                <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                    ['text-altWhite']: textColor === 'altWhite',
                    ['text-royalBlue']: textColor === 'royalBlue',
                    ['text-coolGray']: textColor === 'coolGray',
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
                href={sms ? smsHref : emailHref}
                className={cx('py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center', {
                    ['text-altWhite']: textColor === 'altWhite',
                    ['text-royalBlue']: textColor === 'royalBlue',
                    ['text-coolGray']: textColor === 'coolGray',
                    ['bg-royalBlue']: backgroundColor === 'royalBlue',
                    ['bg-scarlet']: backgroundColor === 'scarlet',
                    ['bg-yellow-300']: backgroundColor === 'yellow',
                    ['bg-green-400']: backgroundColor === 'bg-green-400',
                    ['rounded-lg']: open
                })}
                onMouseEnter={expandHandler}
                onMouseLeave={expandHandler}
            >
                <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                    ['text-altWhite']: textColor === 'altWhite',
                    ['text-royalBlue']: textColor === 'royalBlue',
                    ['text-coolGray']: textColor === 'coolGray',
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