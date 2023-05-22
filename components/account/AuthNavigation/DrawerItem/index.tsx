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
                className='text-altWhite text-2xl font-medium'
            >
                <Icon size={'3rem'}/>
            </Link>
            {/* {linkText} */}
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