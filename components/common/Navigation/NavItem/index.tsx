import React from 'react'
import Link from 'next/link'
import { NavItemI } from '@/interfaces'
import cx from 'classnames'

const NavItem = ({
    href,
    color = "altBlack",
    linkText
}: NavItemI) => {

    return (
        <li>
            <Link
                href={`/${encodeURIComponent(href)}`}
                title={`Navigate to ${linkText} page`}
                className=""
            >
                {linkText}
            </Link>
        </li>
    )
}

export default NavItem