import { InputType } from '@/types'

export const Input = ({
    label,
    type = 'text',
    fieldRequired,
    name,
    register,
    registerOptions,
    hideLabel = false
}: InputType) => {

    return (
        <div
            className="py-3"
        >
            {!hideLabel &&
                <label>{ label }{fieldRequired && <span className='text-vermillion'>*</span>}</label>
            }
            <input
                {...register(name, {
                    required: fieldRequired,
                    ...registerOptions
                })}
                className="py-1 px-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
                type={type}
                aria-label={label}
            />

        </div>
    )
}