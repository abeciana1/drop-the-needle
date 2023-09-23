import { InputType } from '@/types'
import { format } from 'date-fns'

const DatePicker = ({
    label,
    fieldRequired,
    name,
    register,
    registerOptions
}: InputType) => {

    let today = new Date()
    let formattedMinDate = format(today, 'yyyy-MM-dd')

    return (
        <div className="py-3">
            <label>{ label }{fieldRequired && <span className='text-vermillion'>*</span>}</label>
            <input  
                {...register(name, {
                    required: fieldRequired,
                    ...registerOptions
                })}
                type='date'
                min={formattedMinDate}
                className="py-1 pl-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
            />
        </div>
    )
}

export default DatePicker