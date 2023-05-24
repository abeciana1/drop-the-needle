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

const SideNav = () => {
    const [ showNav, setNav ] = useState(false)

    const {
        isMobile,
        isDesktop
    } = useResponsiveness() || {}

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/'})
    }

    return (
        <Fragment>
            {(showNav || isDesktop) &&
                <nav className="bg-altBlack max-w-fit h-screen flex flex-col items-center px-1 py-2 justify-between">
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
            {isMobile &&
                <button onClick={() => setNav(!showNav)} className={cx('absolute bg-altBlack text-altWhite top-3/4 rounded-full border-altWhite border-2 p-1 text-left', {
                    ['ml-16']: showNav,
                    ['left-0']: showNav === false
                })}>
                    {showNav ?
                        <AiOutlineDoubleLeft size={'2rem'}/>
                        :
                        <AiOutlineDoubleRight size={'2rem'}/>
                    }
                </button>
            }
        </Fragment>
    )
}

export default SideNav