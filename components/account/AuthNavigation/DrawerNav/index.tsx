import { useState } from 'react'
import {
    DrawerItemLink,
    DrawerItemButton
} from '@/components/account'
import {
    AiFillLayout,
    AiOutlineBars,
    AiFillEdit,
    AiOutlineLogout
} from 'react-icons/ai'

const DrawerNav = () => {
    // const [ open, setOpen ] = useState(false)

    return (
        <nav className="bg-altBlack">
            <ul>
                <DrawerItemLink
                    href='dashboard'
                    linkText='Dashboard'
                    icon={AiFillLayout}
                />
                <DrawerItemLink
                    href='dashboard/power-hours'
                    linkText='My Power Hours'
                    icon={AiOutlineBars}
                />
                <DrawerItemLink
                    href='dashboard/power-hours/create'
                    linkText='Create New'
                    icon={AiFillEdit}
                />
            </ul>
            {/* <DrawerItemButton
                text='Signout'
                icon={AiOutlineLogout}
            /> */}
        </nav>
    )
}

export default DrawerNav