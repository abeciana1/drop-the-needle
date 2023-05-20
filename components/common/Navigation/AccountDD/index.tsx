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
            <ul className="absolute font-medium text-lg space-y-0.5 bg-transparent shadow-xl p-2 right-0 w-44 rounded-lg text-right">
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