import React from 'react'
import Link from 'next/link'
import { signOut } from "next-auth/react"

const AccountDD = () => {

    const handleSignOut = async () => {
        await signOut({callbackUrl: '/'})
    }

    return (
        <li className="list-none z-50 relative">
            <div className='flex flex-col font-medium text-2xl anim-text hover-underline-animation hover:text-ceruleanBlue ceruleanBlue text-ceruleanBlue after:bg-ceruleanBlue'>
                My Account
            </div>
            <ul className="md:absolute font-medium text-lg space-y-3 mt-3 ml-3 md:mt-0 md:ml-0 md:space-y-0.5 md:bg-transparent md:shadow-xl md:p-2 md:right-0 md:w-44 md:rounded-lg md:text-right">
                <li>
                    <Link
                        href={encodeURI('/dashboard')}
                        className='hover:underline decoration-2 underline-offset-4'
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        href={encodeURI('/dashboard/power-hours')}
                        className='hover:underline decoration-2 underline-offset-4'
                    >
                        My Power Hours
                    </Link>
                </li>
                <li>
                    <button
                        onClick={handleSignOut}
                        className='hover:underline decoration-2 underline-offset-4'
                    >
                        Signout
                    </button>
                </li>
            </ul>
        </li>
    )
}

export default AccountDD