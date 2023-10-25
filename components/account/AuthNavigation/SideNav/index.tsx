import { Fragment, useState } from 'react'
import {
    SideNavItemLink,
    SideNavItemButton
} from '@/components/account'
import {
    AiFillLayout,
    AiOutlineBars,
    AiFillEdit,
    AiOutlineLogout
} from 'react-icons/ai'
import { signOut } from "next-auth/react"
import {
    LogoLink,
    ToggleButton
} from '@/components/common'
import useResponsiveness from '@/hooks/useResponsiveness'
import { setInstance } from '@/redux/slices/instanceSlice'
import {
    useAppSelector,
    useAppDispatch
} from '@/redux/hooks'

const SideNav = () => {
    const dispatch = useAppDispatch()
    const [ isOpen, setOpen ] = useState(false)

    const {
        isMobile,
        isTablet,
        isDesktop
    } = useResponsiveness() || {}

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' })
    }

    const createNewPHHandler = () => {
        dispatch(setInstance({
            display: true,
            name: 'phCreateor',
            data: {}
        }))
    }

    return (
        <aside className="relative z-50">
            {(isOpen || isDesktop) &&
                <nav className="fixed bg-altBlack max-w-fit h-full flex flex-col items-center px-1 py-2 justify-between">
                    <Fragment>
                        <LogoLink size={70} />
                        <ul className="space-y-5">
                            <SideNavItemLink
                                href='dashboard'
                                linkText='Dashboard'
                                icon={AiFillLayout}
                            />
                            <SideNavItemLink
                                href='dashboard/powerhour/hosted'
                                linkText='My Power Hours'
                                icon={AiOutlineBars}
                            />
                            <SideNavItemButton
                                onClick={createNewPHHandler}
                                text='Create new power hour'
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
                <ToggleButton isOpen={isOpen} setOpen={setOpen} />
            }
        </aside>
    )
}

export default SideNav