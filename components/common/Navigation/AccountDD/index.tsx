import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { signOut } from "next-auth/react"
import useResponsiveness from '@/hooks/useResponsiveness'
import cx from 'classnames'

const AccountDD = () => {
    const [ open, setOpen ] = useState(false)

    const {
        isMobile,
        isTablet,
        isDesktop
    } = useResponsiveness() || {}

    const handleSignOut = async () => {
        await signOut({callbackUrl: '/'})
    }

    const handleDropdown = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!open)
    }

    useEffect(() => {
        if (document) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    setOpen(false)
                }
            })
        }
    }, [open])

    return (
        <li onMouseLeave={() => setOpen(false)} className="list-none z-50 relative">
            <button data-testid='account-dd' onClick={(e) => handleDropdown(e)} className='flex flex-col font-medium text-2xl anim-text hover-underline-animation hover:text-ceruleanBlue ceruleanBlue text-ceruleanBlue after:bg-ceruleanBlue'>
                My Account
            </button>
            {(open || isTablet || isMobile)  &&
                <ul 
                    data-testid='menu-list' className={cx('font-medium text-lg bg-altWhite',{
                    ["space-y-3 mt-3 ml-3"]: (isTablet || isMobile),
                    ["absolute mt-0 ml-0 space-y-0.5 shadow-xl p-2 right-0 w-44 rounded-lg text-right"]: isDesktop
                })}>
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
            }
        </li>
    )
}

export default AccountDD