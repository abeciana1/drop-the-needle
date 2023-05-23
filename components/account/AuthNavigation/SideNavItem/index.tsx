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

    const Icon = icon as React.ElementType

    return (
        <li className="list-none">
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

export const SideNavItemButton = ({
    text,
    onClick,
    icon
}: OnClickIconButtonI) => {

    const Icon = icon as React.ElementType

    return (
        <li className="list-none">
            <button 
                onClick={onClick}
                className='text-altWhite text-2xl font-medium'
            >
                {/* {text} */}
                <Icon size={'3rem'} />
            </button>
        </li>
    )
}