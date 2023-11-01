import { AddTrackFormI } from '@/interfaces'
import { useForm } from "react-hook-form"
import { SubmitButton } from '@/components/common'
import {
    FormContainer,
    Input
} from '@/components/account'
import { ErrorMessage } from "@hookform/error-message"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const AddTrackForm = ({
    submitHandler
}: AddTrackFormI) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { data: session } = useSession()

    const submit = (data: any) => {
        let phId = Number(router.query.id)
        submitHandler({
            ...data,
            powerHourId: Number(phId),
            participantId: session?.user?.id
        })
    }

    return (
        <FormContainer onSubmit={handleSubmit(submit)}>
            <Input
                label='Title'
                name='title'
                fieldRequired='This field is required.'
                register={register}
            />
            <ErrorMessage name='title' errors={errors} as='div' className='text-vermillion'/>
            <Input
            label='Artist'
            name='artist'
            fieldRequired='This field is required.'
            register={register}
            />
            <ErrorMessage name='artist' errors={errors} as='div' className='text-vermillion'/>
            <Input
                label='Album'
                name='album'
                fieldRequired='This field is required.'
                register={register}
            />
            <ErrorMessage name='album' errors={errors} as='div' className='text-vermillion'/>
            <Input
                label='Year'
                name='year'
                type='number'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    minLength: {
                        value: 4,
                        message: 'This field requires a minimum of 4 digits.'
                    },
                    maxLength: {
                        value: 4,
                        message: 'This field may not exceed more than 4 digits.'
                    }
                }}
            />
            <ErrorMessage name='year' errors={errors} as='div' className='text-vermillion'/>
            <Input
                label='YouTube link'
                name='youtubeLink'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    pattern: {
                        value: new RegExp("youtube.com/watch\\?v=", "gi"),
                        message: "This field requires a pattern like — https://www.youtube.com/watch?v=QGnkTQikhsE"
                    }
                }}
            />
            <ErrorMessage name='youtubeLink' errors={errors} as='div' className='text-vermillion'/>
            <Input
                label='Start time'
                name='startTime'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    pattern: {
                        value: /^[0-9]:[0-5][0-9]$/gi,
                        message: "This field requires a pattern like — 1:55"
                    }
                }}
            />
            <ErrorMessage name='startTime' errors={errors} as='div' className='text-vermillion'/>
            <Input
                label='End time'
                name='endTime'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    pattern: {
                        value: /^[0-9]:[0-5][0-9]$/gi,
                        message: "This field requires a pattern like — 1:55"
                    }
                }}
            />
            <ErrorMessage name='endTime' errors={errors} as='div' className='text-vermillion'/>
            <div className="py-3">
                <SubmitButton
                    bgColor='vermillion'
                />
            </div>
        </FormContainer>
    )
}

export default AddTrackForm