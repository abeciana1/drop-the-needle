import React from 'react'
import Link from 'next/link'
import { NavItemI } from '@/interfaces'

const NavItem = ({
    href,
    color = "altBlack",
    linkText
}: NavItemI) => {

    return (
            <Link
                // href={href}
                href={`/${encodeURIComponent(href)}`}
            >
                {linkText}
            </Link>
        // <li>
        // </li>
    )
}

export default NavItem