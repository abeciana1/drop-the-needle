import { useState } from 'react'
import { DrawerItemLink } from '@/components/account'

const DrawerNav = () => {
    // const [ open, setOpen ] = useState(false)

    return (
        <nav className="bg-altBlack">
            <DrawerItemLink
                href='dashboard'
                linkText='Dashboard'
            />
        </nav>
    )
}

export default DrawerNav