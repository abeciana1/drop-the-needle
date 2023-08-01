import { Disclosure } from "@headlessui/react";
import cx from 'classnames'
import { HiChevronUp } from "react-icons/hi"
import { AccordionDataI } from '@/interfaces'

const AccordionDataList = ({
    icon,
    heading,
    dataSource,
    size,
    property
}: AccordionDataI) => {
    const Icon = icon as React.ElementType

    // w-64 sm:w-80 lg:w-96
    return (
        <div data-testid="accordion-data-list" className="flex w-full flex-col mx-auto">
    <Disclosure>
        {({ open }) => (
        <>
            <Disclosure.Button className={cx("relative flex w-full items-center justify-between rounded-lg border-2 focus:ring-2 focus:ring-ceruleanBlue border-altBlack bg-layer-2 px-4 py-2 font-semibold text-heading hover:bg-muted-1 focus:outline-none", {
                ['text-sm']: size === 'sm',
                ['text-base']: size === 'md',
                ['text-lg']: size === 'lg'
            })}>
            <div className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                <div className="font-medium">{ heading }</div>
            </div>
            <HiChevronUp
                strokeWidth="2.5"
                className={`${
                open ? "rotate-180 text-heading" : "text-text"
                } h-5 w-5 text-altBlack`}
            />
            </Disclosure.Button>
            <Disclosure.Panel className="relative">
                <ul
                    className="px-2 py-2 h-28 top-2 overscroll-auto overflow-auto z-50 absolute rounded-md bg-altWhite w-full shadow-lg ring-altBlack ring-1"
                >
                    { dataSource?.map((dataEntity: any) => {
                        return <li key={dataEntity?.id} className="text-lg">{ dataEntity[property] }</li>
                    })}
                </ul>
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
        </div>
    )
}

export default AccordionDataList