import { useState } from 'react'
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

const SideNav = () => {
    // const [ open, setOpen ] = useState(false)

    return (
        <nav className="bg-altBlack max-w-fit h-screen flex items-center px-2">
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
            {/* <SideNavItemButton
                text='Signout'
                icon={AiOutlineLogout}
            /> */}
        </nav>
    )
}

export default SideNav