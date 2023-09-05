import { useEffect, useState } from 'react'
import { InputI } from '@/interfaces'
import { omit } from 'lodash'

export const TextInput = ({
    name,
    labelText,
    value,
    fieldRequired,
    placeholder,
    onChange,
    setErrorsPresent,
    errorsPresent
}: InputI) => {

    const [ error, setError ] = useState<{[key: string]: any}>({})

    useEffect(() => {
        validate(value)
    }, [])

    const validate = (value: string) => {
        if (value?.length < 1) {
            setErrorsPresent(errorsPresent++)
            setError({
                ...error,
                error: 'This field is required.'
            })
        } else {
            setErrorsPresent(--errorsPresent)
            let newError1 = omit(error, "error")
            setError(newError1)
        }
    }

    return (
        <div
            className="py-3"
        >
            <label className="">{ labelText }</label>
            <input
                className="py-1 pl-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
                placeholder={placeholder}
                name={name}
                type="text"
                required={fieldRequired}
                value={value || ''}
                onChange={(e) => {
                    onChange(e)
                    validate(e.target.value)
                }}
            />
            {error && Object.keys(error).length > 0 &&
                <div data-error="true" className='text-vermillion'>
                    {error.error}
                </div>
            }
        </div>
    )
}