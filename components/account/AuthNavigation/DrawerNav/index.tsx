import { useState } from 'react'
import { DrawerItemLink } from '@/components/account'
import { AiFillLayout } from 'react-icons/ai'

const DrawerNav = () => {
    // const [ open, setOpen ] = useState(false)

    return (
        <nav className="bg-altBlack">
            <DrawerItemLink
                href='dashboard'
                linkText='Dashboard'
                icon={AiFillLayout}
            />
        </nav>
    )
}

export default DrawerNav