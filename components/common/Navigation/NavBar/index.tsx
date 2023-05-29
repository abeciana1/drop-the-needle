import {
    Fragment,
    useState } from 'react'
import {
    LogoLink,
    OnClickButton,
    AccountDD,
    NavItem,
    ToggleButton
} from '@/components/common'
import useResponsiveness from '@/hooks/useResponsiveness'
import cx from 'classnames'
import {
    signIn,
    useSession
} from "next-auth/react"

const NavBar = () => {
    const { data: session } = useSession()
    const [ isOpen, setOpen ] = useState(false)
    const {
        isMobile,
        isTablet,
        isDesktop
    } = useResponsiveness() || {}

    const handleGoogleSignin = async () => {
        await signIn('google', {callbackUrl: '/dashboard'})
    }

    return (
        <Fragment>
            <nav
                className={cx('z-50 pt-5 px-5 sm:px-10 lg:px-20', {
                    ['flex justify-between items-center']: isDesktop,
                    ['bg-altWhite h-screen']: ((isMobile || isTablet) && isOpen)
                })}
            >
                <LogoLink size={150} />
                {(isOpen || isDesktop) &&
                    <Fragment>
                        <ul
                            data-testid={isOpen ? 'menu-open': 'menu-closed'}
                            className={cx('flex', {
                                ['flex-col pt-6 gap-6 pl-6']: isMobile || isTablet,
                                ['pt-0 gap-9']: isDesktop
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
                            {!!session?.user === false &&
                                <li 
                                    className={cx('list-none',{
                                        ['pt-6 pl-6']: isMobile || isTablet 
                                    })}
                                >
                                    <OnClickButton
                                        onClick={handleGoogleSignin}
                                        text='Signin'
                                        bgColor='vermillion'
                                        ctaArrow={false}
                                    />
                                </li>
                            }
                            {session?.user &&
                                <AccountDD />
                            }
                        </ul>
                    </Fragment>
                }
                {(isMobile || isTablet) &&
                    <ToggleButton isOpen={isOpen} setOpen={setOpen} />
                }
            </nav>
        </Fragment>
    )
}

export default NavBar