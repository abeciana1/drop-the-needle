import { Disclosure } from "@headlessui/react";
import cx from 'classnames'
import { HiChevronUp } from "react-icons/hi"

interface AccordionDataI {
    icon: React.ElementType;
    heading: string;
    dataSource: any;
    size: string;
    property: string;
}

export const AccordionDataList = ({
    icon,
    heading,
    dataSource,
    size,
    property
}: AccordionDataI) => {

    const Icon = icon as React.ElementType

    return (
        <div className="flex w-64 sm:w-80 lg:w-96 flex-col mx-auto">
    <Disclosure>
        {({ open }) => (
        <>
            <Disclosure.Button className={cx("relative flex w-full items-center justify-between rounded-lg border border-2 border-coolGray bg-layer-2 px-4 py-2 font-semibold text-heading hover:bg-muted-1 focus:outline-none dark:border-0 dark:bg-layer-3", {
                ['text-sm']: size === 'sm',
                ['text-base']: size === 'md',
                ['text-lg']: size === 'lg'
            })}>
            <div className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                <div className="font-medium">{ heading }</div>
            </div>
            <ChevronUpIcon
                strokeWidth="2.5"
                className={`${
                open ? "rotate-180 text-heading" : "text-text"
                } h-5 w-5 text-coolGray`}
            />
            </Disclosure.Button>
            <Disclosure.Panel className="relative">
                <ul
                    className="px-2 py-2 h-28 top-2 overscroll-auto overflow-auto z-50 absolute rounded-md bg-white w-full"
                >
                    { dataSource.map((dataEntity: any) => {
                        return <li className="text-lg">{ dataEntity[property] }</li>
                    })}
                </ul>
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
        </div>
    )
}