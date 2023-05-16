import React, { useState } from 'react'
import NavItem from '../NavItem'
import Image from 'next/image'
import Link from 'next/link'
import { OnClickButton } from '@/components/common'
import useResponsiveness from '@/hooks/useResponsiveness'
import cx from 'classnames'
import { Squash as Hamburger } from 'hamburger-react'
import { signIn } from "next-auth/react"


const NavBar = () => {
    const [ isOpen, setOpen ] = useState(false)

    const {
        isMobile,
        isTablet,
        isDesktop
    } = useResponsiveness() || {}

    const handleGoogleSignin = async () => {
        await signIn('google', {callbackUrl: '/'})
    }

    return (
        <React.Fragment>
            <nav
                className={cx('z-50 pt-5', {
                    ['flex justify-between items-center ']: isDesktop,
                    ['bg-altWhite h-screen']: ((isMobile || isTablet) && isOpen)
                })}
            >
                <Link
                    href='/'
                    title='Navigate to homepage'
                >
                    <Image
                        src='/drop-the-needle-logo.webp'
                        height={150}
                        width={150}
                        alt='Drop The Needle logo'
                        priority
                        className='mx-auto'
                    />
                </Link>
                {(isOpen || isDesktop) &&
                    <React.Fragment>
                        <ul
                            data-testid={isOpen ? 'menu-open': 'menu-closed'}
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
                            <OnClickButton
                                onClick={handleGoogleSignin}
                                text='Signin'
                                bgColor='vermillion'
                                ctaArrow={false}
                            />
                        </div>
                    </React.Fragment>
                }
                {(isMobile || isTablet) &&
                    <div data-testid='hamburger-btn' className='absolute top-5 right-5'>
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            color='#343434'
                        />
                    </div>
                }
            </nav>
        </React.Fragment>
    )
}

export default NavBar