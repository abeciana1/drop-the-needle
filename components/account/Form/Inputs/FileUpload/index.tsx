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
                    accept={acceptedFileTypes}
                />
                <label
                    htmlFor='file-input'
                    className='py-1 px-3 sm:text-xl w-fit rounded-lg text-center bg-ceruleanBlue text-altWhite'
                >
                    Choose a file 
                </label>
                <label>{value?.substring(0,20) + '...'}</label>
            </div>
        </div>
    )
}

export default FileUpload