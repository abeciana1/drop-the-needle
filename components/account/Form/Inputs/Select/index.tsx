import { SelectI } from '@/interfaces'
import { OptionType } from '@/types'

const Select = ({
    label,
    fieldRequired,
    name,
    register,
    registerOptions,
    options
}: SelectI) => {

    return (
        <div className="py-3">
            <div>{ label }{fieldRequired && <span className='text-vermillion'>*</span>}</div>
            <select
                id={name}
                {...register(name, {
                    required: fieldRequired,
                    ...registerOptions
                })}
                className="py-1 pl-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
            >
                {options?.map((option: OptionType, index: number) => {
                    return (
                        <option key={index} value={option?.value}>{option?.text}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select