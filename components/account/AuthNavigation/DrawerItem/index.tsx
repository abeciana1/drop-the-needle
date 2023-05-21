import Link from 'next/link'
import { NavItemI } from '@/interfaces'

export const DrawerItemLink = ({
    href,
    linkText
}: NavItemI) => {

    return (
        <Link
            href={`/${encodeURI(href)}`}
        >
            {linkText}
        </Link>
    )
}

export const DrawerItemButton = () => {

    return (
        <button></button>
    )
}