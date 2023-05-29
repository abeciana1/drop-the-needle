import { useState } from 'react'
import Link from 'next/link'
import {
    NavItemIconI,
    OnClickIconButtonI
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
            >
                <Icon size={'2.25rem'}/>
            </Link>
            {hover &&
                <div 
                    className='fixed ml-16 font-medium text-altWhite bg-altBlack px-2 py-1 rounded-lg min-w-fit text-center'
                >{linkText}</div>
            }
        </li>
    )
}

export const SideNavItemButton = ({
    text,
    onClick,
    icon
}: OnClickIconButtonI) => {
    const [ hover, setHover ] = useState(false)
    const Icon = icon as React.ElementType

    return (
        <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="list-none flex items-center"
        >
            <button 
                onClick={onClick}
                className='text-altWhite text-2xl font-medium'
            >
                <Icon size={'2.25rem'} />
            </button>
            {hover &&
                <div 
                    className='absolute ml-16 font-medium text-altWhite bg-altBlack px-2 py-1 rounded-lg'
                >{text}</div>
            }
        </li>
    )
}