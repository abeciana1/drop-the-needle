import { useState } from 'react'
import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"
import {
    FormContainer,
    FileUpload
} from '@/components/account'
import { UpdateCoverImageFormI } from '@/interfaces'
import { useRouter } from 'next/router'
import {
    SubmitButton
} from '@/components/common'
import Image from 'next/image'

const UpdateCoverImageForm = ({
    coverImage
}: UpdateCoverImageFormI) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [ coverImageSrc, setSrc ] = useState(coverImage)

    const submitHandler = (data: any) => {
        let coverImgFile = data.coverImage[0]
        if (coverImgFile) {
            // let phId = Number(router.query.id)
            setSrc(URL.createObjectURL(coverImgFile))
        }
    }

    return (
        <>
            <div className="pt-3">
                <Image
                    src={coverImageSrc}
                    width={250}
                    height={250}
                    alt='Preview image'
                    className='mx-auto'
                />
            </div>
            <FormContainer onSubmit={handleSubmit(submitHandler)}>
                <FileUpload
                    label='Cover image'
                    value={coverImageSrc}
                    name='coverImage'
                    fieldRequired={true}
                    register={register}
                    registerOptions={{
                        validate: {
                            acceptedFormats: (files: File[]) => {
                                console.log(files)
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