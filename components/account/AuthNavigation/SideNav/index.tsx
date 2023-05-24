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
// todo add button to hide nav options on mobile and tablet devices

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
        <Fragment>
            {(showNav || isDesktop) &&
                <nav className="bg-altBlack max-w-fit h-screen flex flex-col items-center px-1 py-2 justify-between">
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
                    {/* {(isMobile || isTablet) && */}
                    {(isDesktop) &&
                        <button className='absolute bg-altBlack text-altWhite ml-20 top-3/4 rounded-full border-altWhite border-2 p-1 text-left'>
                            {showNav ?
                                <AiOutlineDoubleRight size={'2rem'}/>
                                :
                                <AiOutlineDoubleLeft size={'2rem'}/>
                            }
                        </button>
                    }
                </nav>
            }
        </Fragment>
    )
}

export default SideNav