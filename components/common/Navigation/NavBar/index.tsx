import React from 'react'
import NavItem from '../NavItem'

const NavBar = () => {

    return (
        <React.Fragment>
            <nav>
                <ul>
                    <NavItem
                        href='/'
                        color='jaffa'
                        linkText='Home'
                    />
                    <NavItem
                        href='/participate'
                        color='vermillion'
                        linkText='Participate'
                    />
                    <NavItem
                        href='/listen'
                        color='altGreen'
                        linkText='Listen'
                    />
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default NavBar