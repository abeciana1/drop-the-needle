import { useEffect, useState, useMemo } from 'react'
import { InputI } from '@/interfaces'
import { omit } from 'lodash'

export const Input = ({
    name,
    type = 'text',
    labelText,
    value,
    fieldRequired,
    placeholder,
    onChange,
    setErrorsPresent,
    errorsPresent,
    min = 0,
    max = 0
}: InputI) => {
    // const [ val, setVal ] = useState(value)
    const [ error, setError ] = useState<{[key: string]: any}>({})

    useEffect(() => {
        validate(value?.toString())
    }, [])

    const validate = (value: string) => {
        if (value?.length < 1) {
            setErrorsPresent(errorsPresent++)
            setError({
                ...error,
                error: 'This field is required.'
            })
        } else {
            setErrorsPresent(errorsPresent--)
            let newError1 = omit(error, "error")
            setError(newError1)
        }
    }

    // const validatedState = useMemo(() => {

    // }, [val, error, errorsPresent])

    return (
        <div
            className="py-3"
        >
            <label className="">{ labelText }</label>
            <input
                className="py-1 pl-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
                // defaultValue={placeholder}
                name={name}
                type={type}
                required={fieldRequired}
                value={value || ''}
                onChange={(e) => {
                    onChange(e)
                    validate(e.target.value)
                }}
                min={min}
                max={max}
            />
            {error && Object.keys(error)?.length > 0 &&
                <div data-error="true" className='text-vermillion'>
                    {error.error}
                </div>
            }
        </div>
    )
}