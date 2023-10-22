import { InputType } from '@/types'

const TextArea = ({
    label,
    fieldRequired,
    name,
    register,
    registerOptions
}: InputType) => {

    return (
        <div className="py-3">
            <label>{ label }{fieldRequired && <span className='text-vermillion'>*</span>}</label>
            <textarea
                {...register(name, {
                    required: fieldRequired,
                    ...registerOptions
                })}
                className="py-1 px-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
            >

            </textarea>
        </div>
    )
}

export default TextArea