import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExpandBtn } from '@/components/common'
import { AiOutlineClose } from 'react-icons/ai'
import { SideNavItemButton } from '@/components/account'
import { CiLogin } from "react-icons/ci";
import { DrawerI } from '@/interfaces'

const Drawer = ({
    panelTitle,
    children
}: DrawerI) => {
    const [open, setOpen] = useState(true)

    const toggleOpen = () => {
        setOpen(true)
    }

    return(
        <Fragment>
            {!open &&
                <div className='bg-altBlack p-2 rounded-full left-0 top-1/2 fixed'>
                    <SideNavItemButton
                        text='Open song selection'
                        icon={CiLogin}
                        onClick={toggleOpen}
                    />
                </div>
            }
            <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                    <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6 flex items-center justify-between">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                {panelTitle}
                            </Dialog.Title>
                            <ExpandBtn
                                text="Close"
                                icon={AiOutlineClose}
                                backgroundColor='vermillion'
                                size={7}
                                onClick={() => setOpen(false)}
                            />
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto">
                            {children}
                        </div>
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                <div className="absolute inset-0 overflow-hidden">
                </div>
            </Dialog>
        </Transition.Root>
        </Fragment>
    )
}

export default Drawer