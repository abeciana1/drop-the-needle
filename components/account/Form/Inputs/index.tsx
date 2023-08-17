import { useEffect, useState } from 'react'
import { InputI } from '@/interfaces'
import { omit } from 'lodash'

const validate = (value: string, inputRule: any, error: any, setError: any) => {
    switch (inputRule?.type) {
        case 'fieldRequired':
            if (value?.length < 1) {
                setError({
                    ...error,
                    error: 'This field is required.'
                })
            } else {
                let newError = omit(error, "error")
                setError(newError)
            }
        case 'lenLimit':
            if (value?.length < 1) {
                setError({
                    ...error,
                    error: 'This field is required.'
                })
            } else if (value?.length < inputRule?.min || value?.length > inputRule?.max) {
                setError({
                    ...error,
                    error: `This field requires a minimum of ${inputRule?.min} and maximum ${inputRule?.max} characters`
                })
            } else {
                let newError = omit(error, "error")
                setError(newError)
            }
        case 'textFormat':
            if (value?.length < 1) {
                setError({
                    ...error,
                    error: 'This field is required.'
                })
            } else if (!!value?.match(new RegExp(inputRule.regExPattern, "gi")) === false) {
                setError({
                    ...error,
                    error: `Please format your answer to this format: ${inputRule.example}`
                })
            } else {
                let newError = omit(error, "error")
                setError(newError)
            }
        default:
            break;
    }
}

export const Input = ({
    name,
    labelText,
    type,
    value,
    fieldRequired,
    placeholder,
    inputRule,
    onChange,
    errors,
    isSubmitted,
    // setErrors,
    // defaultValue,
    ...additionalProps
}: InputI) => {

    const [ error, setError ] = useState<{[key: string]: any}>({})

    useEffect(() => {
        validate(value, inputRule, error, setError)
    }, [])
    return (
        <div
            className="py-3"
        >
            <label className="">{ labelText }</label>
            <input
                className="py-1 pl-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
                placeholder={placeholder}
                name={name}
                type={type}
                required={fieldRequired}
                value={value || ''}
                onChange={(e) => {
                    onChange(e)
                    validate(e.target.value, inputRule, error, setError)
                }}
                {...additionalProps}
            />
            {error && Object.keys(error).length > 0 &&
                <div>
                    {error.error}
                </div>
            }
        </div>
    )
}