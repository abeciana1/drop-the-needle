import { TextInputI } from '@/interfaces'

export const TextInput = ({
    name,
    labelText,
    type,
    value,
    fieldRequired,
    placeholder,
    onChange
}: TextInputI) => {
    return (
        <div
            className="py-3"
        >
            <label className="sr-only">{ labelText }</label>
            <input
                className="py-1 pl-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
                placeholder={placeholder}
                name={name}
                type={type}
                value={value}
                required={fieldRequired}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}