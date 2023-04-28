import React from 'react'
import NavItem from '../NavItem'
import Image from 'next/image'
import Link from 'next/link'
import { LinkLookLikeButton } from '@/components/common'
import useResponsiveness from '@/hooks/useResponsiveness'
import cx from 'classnames'

const NavBar = () => {

    const {
        isMobile,
        isTablet,
        isDesktop
    } = useResponsiveness() || {}
    console.log(isDesktop)

    return (
        <React.Fragment>
            <nav
                className={cx('z-50 pt-5', {
                    ['flex justify-between items-center ']: isDesktop,
                    ['bg-altWhite h-screen']: isMobile || isTablet
                })}
            >
                <Link
                    href='/'
                    title='Navigate to homepage'
                >
                    <Image
                        src='/drop-the-needle-logo.webp'
                        height={100}
                        width={100}
                        alt='Drop The Needle logo'
                        priority
                        className='mx-auto'
                    />
                </Link>
                <ul
                    className={cx('flex', {
                        ['flex-col pt-6 gap-6 pl-6']: isMobile || isTablet,
                        ['pt-0 gap-12']: isDesktop
                    })}
                >
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
                <div 
                    className={cx({
                        ['pt-6 pl-6']: isMobile || isTablet 
                    })}
                >
                    <LinkLookLikeButton
                        linkText='Signin'
                        bgColor='vermillion'
                        textColor='altWhite'
                        href='signin'
                    />
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar