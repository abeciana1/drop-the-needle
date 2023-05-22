import Link from 'next/link'
import {
    NavItemIconI,
    OnClickIconButtonI
} from '@/interfaces'

export const DrawerItemLink = ({
    href,
    linkText,
    icon
}: NavItemIconI) => {

    const Icon = icon as React.ElementType

    return (
        <li>
            <Link
                href={`/${encodeURI(href)}`}
                className='text-altWhite flex items-center text-2xl font-medium justify-end'
            >
                {linkText}
                <Icon size={'3rem'}/>
            </Link>
        </li>
    )
}

export const DrawerItemButton = ({
    text,
    onClick,
    icon
}: OnClickIconButtonI) => {

    const Icon = icon as React.ElementType

    return (
        <li>
            <button onClick={onClick}>
                {text}
                <Icon size={'3rem'} />
            </button>
        </li>
    )
}