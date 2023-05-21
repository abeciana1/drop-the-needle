import { useState } from 'react'
import { DrawerItemLink } from '@/components/account'
import {
    AiFillLayout,
    AiOutlineBars
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
            </ul>
        </nav>
    )
}

export default DrawerNav