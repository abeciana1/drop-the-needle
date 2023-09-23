import { useState } from 'react'
import { FileUploadI } from '@/interfaces'

const FileUpload = ({
    label,
    fieldRequired,
    name,
    register,
    value,
    acceptedFileTypes,
    registerOptions
}: FileUploadI) => {
    const [ val, setVal ] = useState(value)

    const fileUploadChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.value !== value) setVal(e.target.value)
        // let formData = new FormData()
        // if (e?.target?.files) {
        //     formData.append('input', e?.target?.files[0])
        //     axios.post(process.env.HYGRAPH_UPLOAD_URL as string, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         }
        //     })
        //     .then(res => console.log('res', res))
        //     .catch(err => console.error('upload', err))
        // }
    }

    return (
        <div className="py-3 w-64 sm:w-full">
            <label className="">{ label }{fieldRequired && <span className='text-vermillion'>*</span>}</label>
            <div className='flex justify-between ring-2 border-slate-200 rounded-lg focus:ring-royalBlue items-center'>
                <input
                    id='file-input'
                    {...register(name, {
                        required: fieldRequired,
                        ...registerOptions
                    })}
                    type='file'
                    hidden
                    onChange={fileUploadChangeHandler}
                    accept={acceptedFileTypes}
                />
                <label
                    htmlFor='file-input'
                    className='py-1 px-3 sm:text-xl w-fit rounded-lg text-center bg-ceruleanBlue text-altWhite'
                >
                    Choose a file 
                </label>
                <label>{val?.substring(0,20) + '...'}</label>
            </div>
        </div>
    )
}

export default FileUpload