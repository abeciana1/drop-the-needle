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
        <Link
            href={`/${encodeURI(href)}`}
        >
            {linkText}
        </Link>
    )
}

export const DrawerItemButton = ({
    text,
    onClick,
    icon
}: OnClickIconButtonI) => {

    const Icon = icon as React.ElementType

    return (
        <button onClick={onClick}>
            {text}
            <Icon size={4} />
        </button>
    )
}