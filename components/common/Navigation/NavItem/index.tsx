import React from 'react'
import Link from 'next/link'
import { NavItemI } from '@/interfaces'

const NavItem = ({
    href,
    color,
    linkText
}: NavItemI) => {

    return (
        <li>
            <Link
                href={`/${encodeURIComponent(href)}`}
            >
                {linkText}
            </Link>
        </li>
    )
}

export default NavItem