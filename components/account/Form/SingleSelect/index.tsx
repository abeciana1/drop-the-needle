import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
    HiCheck,
    HiSelector
} from "react-icons/hi"
import {
    SingleSelectFieldI
} from '@/interfaces'

const SingleSelectField = ({
    icon,
    labelText,
    dataSource,
    property,
    selectedValue,
    setSelectedValue
}: SingleSelectFieldI) => {

    const Icon = icon as React.ElementType

    return (
        <div data-testid='select-field' className="w-full mx-auto">
        <label className="sr-only">{ labelText }</label>
        <Listbox value={selectedValue} onChange={setSelectedValue}>
            <div className="relative">
            <Listbox.Button className="border-2 border-altBlack relative w-full cursor-default rounded-lg py-2 pl-4 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <span className="block truncate text-base font-medium">{selectedValue[property]}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <HiSelector
                    className="h-5 w-5 text-coolGray"
                    aria-hidden="true"
                    strokeWidth="2"
                />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="z-50 absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-altWhite py-1 text-base sm:text-sm shadow-lg ring-altBlack ring-1">
                {dataSource.map((data: any, dataIdx: number) => (
                    <Listbox.Option
                    key={dataIdx}
                    className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                    }
                    value={data}
                    >
                    {({ selected }) => (
                        <>
                        <span
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                            {data[property]}
                        </span>
                        {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-amber-600">
                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) : null}
                        </>
                    )}
                    </Listbox.Option>
                ))}
                </Listbox.Options>
            </Transition>
            </div>
        </Listbox>
        </div>
    )
}

export default SingleSelectField