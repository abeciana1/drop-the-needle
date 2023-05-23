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
import Link from 'next/link'
import Image from 'next/image'
import { signOut } from "next-auth/react"

// todo add button to hide nav options on mobile and tablet devices
// todo add tooltip on hover
// todo create logo comp -> DRY

const SideNav = () => {

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/'})
    }

    return (
        <nav className="bg-altBlack max-w-fit h-screen flex flex-col items-center px-1 py-2 justify-between">
            <Link
                href='/'
                title='Navigate to homepage'
            >
                <Image
                    src='/drop-the-needle-logo.webp'
                    height={70}
                    width={70}
                    alt='Drop The Needle logo'
                    priority
                    className='mx-auto bg-altWhite rounded-full'
                />
            </Link>
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