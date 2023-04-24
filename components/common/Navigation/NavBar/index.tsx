import React from 'react'
import { NavBarI } from '@/interfaces'

const NavBar = ({
    children
}: NavBarI) => {

    return (
        <React.Fragment>
            <nav>
                <ul>
                    {children}
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default NavBar