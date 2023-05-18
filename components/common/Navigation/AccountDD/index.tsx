import React from 'react'

const AccountDD = () => {

    return (
        <li className="list-none">
            <div className='flex flex-col font-medium text-2xl anim-text hover-underline-animation hover:text-ceruleanBlue ceruleanBlue text-ceruleanBlue after:bg-ceruleanBlue'>
                My Account
            </div>
            <ul className="absolute">
                <li>Dashboard</li>
                <li>My Power Hours</li>
                <li>Signout</li>
            </ul>
        </li>
    )
}

export default AccountDD