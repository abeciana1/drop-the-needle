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
import { LogoLink } from '@/components/common'
// todo add button to hide nav options on mobile and tablet devices

const SideNav = () => {

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/'})
    }

    return (
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
        </nav>
    )
}

export default SideNav