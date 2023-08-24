import { useEffect, useState } from 'react'
import {
    TextFormatI
} from '@/interfaces'
import { omit } from 'lodash'

export const TextFormatInput = ({
    name,
    labelText,
    value,
    fieldRequired,
    placeholder,
    onChange,
    setErrorsPresent,
    errorsPresent,
    formatPattern,
    example,
    isSubmitted
}: TextFormatI) => {

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
        } else if (!!value?.match(new RegExp(formatPattern, "gi")) === false) {
            setErrorsPresent(errorsPresent++)
            setError({
                ...error,
                error: `Please format your answer to this format:`
            })
        } else {
            setErrorsPresent(--errorsPresent)
            let newError1 = omit(error, "error")
            setError(newError1)
        }
    }

    return (
        <div className="py-3">
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
            {(isSubmitted && error && Object.keys(error).length > 0) &&
                <div data-error="true" className='text-vermillion'>
                    {error.error}
                    <span className='font-medium'>{" "}{example}</span>
                </div>
            }
        </div>
    )
}