import { useState } from 'react'
import Link from 'next/link'
import {
    NavItemIconI,
    OnClickIconButtonI,
    SideNavButtonI
} from '@/interfaces'

export const SideNavItemLink = ({
    href,
    linkText,
    icon
}: NavItemIconI) => {
    const [ hover, setHover ] = useState(false)
    const Icon = icon as React.ElementType

    return (
        <li 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="list-none flex items-center"
        >
            <Link
                href={`/${encodeURI(href)}`}
                className='text-altWhite text-2xl font-medium'
                title={linkText}
            >
                <Icon size={'2.25rem'}/>
            </Link>
            {hover &&
                <div
                    data-testid="tooltip"
                    className='fixed ml-16 font-medium text-altWhite bg-altBlack px-2 py-1 rounded-lg min-w-fit text-center'
                >{linkText}</div>
            }
        </li>
    )
}

export const SideNavItemButton = ({
    text,
    onClick,
    icon,
    reverseTooltip = false
}: SideNavButtonI) => {
    const [ hover, setHover ] = useState(false)
    const Icon = icon as React.ElementType

    return (
        <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="list-none flex items-center"
        >
            {(hover && reverseTooltip) &&
                <div
                    data-testid="tooltip"
                    className='fixed right-16 font-medium text-altWhite bg-altBlack px-2 py-1 rounded-lg min-w-fit text-center'
                >{text}</div>
            }
            <button
                data-testid={text}
                onClick={onClick}
                className='text-altWhite text-2xl font-medium'
            >
                <Icon size={'2.25rem'} />
            </button>
            {(hover && !reverseTooltip) &&
                <div
                    data-testid="tooltip"
                    className='fixed ml-16 font-medium text-altWhite bg-altBlack px-2 py-1 rounded-lg min-w-fit text-center'
                >{text}</div>
            }
        </li>
    )
}