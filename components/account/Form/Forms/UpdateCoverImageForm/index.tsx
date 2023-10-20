import { ErrorMessage } from "@hookform/error-message"
import {
    useForm,
    useWatch
} from "react-hook-form"
import {
    FormContainer,
    FileUpload
} from '@/components/account'
import { UpdateCoverImageFormI } from '@/interfaces'
import { SubmitButton } from '@/components/common'
import Image from 'next/image'
import { updatePowerHourImgAction } from '@/redux/actions/playlist-actions'
import { useAppDispatch } from '@/redux/hooks'
import { useRouter } from 'next/router'
import { clearInstance } from '@/redux/slices/instanceSlice'

const UpdateCoverImageForm = ({
    coverImage
}: UpdateCoverImageFormI) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm()
    const onChangeValue = useWatch({
        control,
        name: 'coverImage',
        defaultValue: coverImage
    })

    const submitHandler = async (data: any) => {
        const formData = new FormData()
        formData.append('file', data.coverImage[0])
        formData.append('folder', 'dtn-image')
        formData.append('upload_preset', 'dtn-img')
        formData.append('asset_folder', 'dtn-image')
        formData.append('filename_override', data.coverImage[0].name.split('.')[0])
        dispatch(updatePowerHourImgAction(formData, router.query.id as string))
        dispatch(clearInstance())
    }

    return (
        <>
            <div className="pt-3">
                <Image
                    src={onChangeValue === coverImage ? onChangeValue : URL?.createObjectURL(onChangeValue[0])}
                    width={250}
                    height={250}
                    alt='Preview image'
                    className='mx-auto w-60 h-60'
                />
            </div>
            <FormContainer onSubmit={handleSubmit(submitHandler)}>
                <FileUpload
                    label='Cover image'
                    value={onChangeValue === coverImage ? onChangeValue : URL?.createObjectURL(onChangeValue[0])}
                    name='coverImage'
                    fieldRequired={true}
                    register={register}
                    registerOptions={{
                        validate: {
                            acceptedFormats: (files: File[]) => {
                                return ["image/jpeg", "image/png", "image/webp"].includes(
                                    files[0]?.type
                                ) || "Only PNG, JPEG, or WEBP"
                            }
                        }
                    }}
                    acceptedFileTypes="image/jpeg, image/png, image/webp"
                />
                <ErrorMessage name='coverImage' errors={errors} as='div' className='text-vermillion'/>
                <div className="py-3">
                    <SubmitButton
                        bgColor='vermillion'
                        text='Upload'
                    />
                </div>
            </FormContainer>
        </>
    )
}

export default UpdateCoverImageForm