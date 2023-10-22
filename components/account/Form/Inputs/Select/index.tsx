import { SelectI } from '@/interfaces'
import { OptionType } from '@/types'

const Select = ({
    label,
    currentSelection,
    fieldRequired,
    name,
    register,
    registerOptions,
    options
}: SelectI) => {
    console.log('registerOptions', registerOptions)

    return (
        <div className="py-3">
            <label>{ label }{fieldRequired && <span className='text-vermillion'>*</span>}</label>
            {currentSelection && <div>{currentSelection}</div>}
            <select
                id={name}
                {...register(name, {
                    required: fieldRequired,
                    ...registerOptions
                })}
                className="py-1 px-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
            >
                {options?.map((option: OptionType, index: number) => {
                    return (
                        <option key={index} value={option?.value} >{option?.text}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select