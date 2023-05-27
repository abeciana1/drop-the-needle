import { Fragment, useState } from 'react'
import {
    SideNavItemLink,
    SideNavItemButton
} from '@/components/account'
import {
    AiFillLayout,
    AiOutlineBars,
    AiFillEdit,
    AiOutlineLogout,
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight
} from 'react-icons/ai'
import { signOut } from "next-auth/react"
import { LogoLink } from '@/components/common'
import useResponsiveness from '@/hooks/useResponsiveness'
import cx from 'classnames'
import { Squash as Hamburger } from 'hamburger-react'

const SideNav = () => {
    const [ showNav, setNav ] = useState(false)

    const {
        isMobile,
        isTablet,
        isDesktop
    } = useResponsiveness() || {}

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/'})
    }

    return (
        <aside className="relative z-50">
            {(showNav || isDesktop) &&
                <nav className="fixed bg-altBlack max-w-fit h-screen flex flex-col items-center px-1 py-2 justify-between">
                    <Fragment>
                        <LogoLink size={70} />
                        <ul className="space-y-5">
                            <SideNavItemLink
                                href='dashboard'
                                linkText='Dashboard'
                                icon={AiFillLayout}
                            />
                            <SideNavItemLink
                                href='dashboard/power-hours'
                                linkText='My Power Hours'
                                icon={AiOutlineBars}
                            />
                            <SideNavItemLink
                                href='dashboard/power-hours/create'
                                linkText='Create New'
                                icon={AiFillEdit}
                            />
                        </ul>
                        <SideNavItemButton
                            text='Signout'
                            icon={AiOutlineLogout}
                            onClick={handleSignOut}
                        />
                    </Fragment>
                </nav>
            }
            {(isMobile || isTablet) &&
                <div data-testid='hamburger-btn' className='absolute top-5 right-3'>
                    <Hamburger
                        toggled={showNav}
                        toggle={setNav}
                        color='#343434'
                    />
                </div>
            }
        </aside>
    )
}

export default SideNav