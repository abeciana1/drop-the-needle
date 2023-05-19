import React from 'react'
import Link from 'next/link'
import { signOut } from "next-auth/react"

const AccountDD = () => {

    const handleSignOut = () => {
        
    }

    return (
        <li className="list-none">
            <div className='flex flex-col font-medium text-2xl anim-text hover-underline-animation hover:text-ceruleanBlue ceruleanBlue text-ceruleanBlue after:bg-ceruleanBlue'>
                My Account
            </div>
            <ul className="absolute">
                <li>
                    <Link
                        href={encodeURI('/dashboard')}
                        className=''
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        href={encodeURI('/dashboard/power-hours')}
                    >
                        My Power Hours
                    </Link>
                </li>
                <li>
                    <Link
                        href=''
                        className=""
                    >
                        Signout
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default AccountDD