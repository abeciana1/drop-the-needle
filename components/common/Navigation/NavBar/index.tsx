import React from 'react'
import NavItem from '../NavItem'
import Image from 'next/image'

const NavBar = () => {

    return (
        <React.Fragment>
            <nav>
                <div>
                    <Image
                        src='/drop-the-needle-logo.webp'
                        height={200}
                        width={200}
                        alt='Drop The Needle logo'
                    />
                </div>
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