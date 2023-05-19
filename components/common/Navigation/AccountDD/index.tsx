import React from 'react'
import Link from 'next/link'
import { signOut } from "next-auth/react"

const AccountDD = () => {

    const handleSignOut = async () => {
        await signOut({callbackUrl: '/'})
    }

    return (
        <li className="list-none">
            <div className='flex flex-col font-medium text-2xl anim-text hover-underline-animation hover:text-ceruleanBlue ceruleanBlue text-ceruleanBlue after:bg-ceruleanBlue'>
                My Account
            </div>
            <ul className="absolute font-medium text-lg space-y-0.5">
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
                    <button
                        onClick={handleSignOut}
                    >
                        Signout
                    </button>
                </li>
            </ul>
        </li>
    )
}

export default AccountDD