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
                className={cx('flex flex-col font-medium text-2xl anim-text z-50', {
                    ['hover:text-jaffa jaffa hover-underline-animation text-jaffa after:bg-jaffa']: color === 'jaffa',
                    ['hover:text-vermillion vermillion hover-underline-animation text-vermillion after:bg-vermillion']: color === 'vermillion',
                    ['hover:text-altGreen altGreen hover-underline-animation text-altGreen after:bg-altGreen']: color === 'altGreen'
                })}
            >
                {linkText}
            </Link>
        </li>
    )
}

export default NavItem