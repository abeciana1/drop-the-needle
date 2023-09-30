import { useState } from 'react'
import { AddTrackFormI } from '@/interfaces'
import { useForm } from "react-hook-form"
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    Input
} from '@/components/account'
import { ErrorMessage } from "@hookform/error-message"
import { useSession } from 'next-auth/react'

const AddTrackForm = ({
    icon,
    submitHandler
}: AddTrackFormI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [ edit, setEdit ] = useState(false)
    // const { data: session } = useSession()
    // console.log('data', session)

    const submit = (data: any) => {
        if (window) {
            let id = window.location.pathname.split('/')[3]
            console.log(window.location)
            submitHandler({
                ...data,
                // participantId: 0,
                powerHourId: id
            })
        }
    }

    return (
        <ModalComp
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
            onClick={() => setEdit(true)}
            render={edit}
            setRender={setEdit}
            text="Add a track"
            bgColor='ceruleanBlue'
            icon={icon}
        >
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
        </ModalComp>
    )
}

export default AddTrackForm