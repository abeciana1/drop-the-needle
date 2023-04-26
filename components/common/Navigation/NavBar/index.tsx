import React from 'react'
import NavItem from '../NavItem'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {

    return (
        <React.Fragment>
            <nav>
                <Link
                    href='/'
                    title='Navigate to homepage'
                >
                    <Image
                        src='/drop-the-needle-logo.webp'
                        height={200}
                        width={200}
                        alt='Drop The Needle logo'
                    />
                </Link>
                <ul>
                    <NavItem
                        href=''
                        color='jaffa'
                        linkText='Home'
                    />
                    <NavItem
                        href='participate'
                        color='vermillion'
                        linkText='Participate'
                    />
                    <NavItem
                        href='listen'
                        color='altGreen'
                        linkText='Listen'
                    />
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default NavBar