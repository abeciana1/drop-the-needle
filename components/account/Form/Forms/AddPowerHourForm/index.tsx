import { useForm, useWatch } from "react-hook-form"
import { SubmitButton } from '@/components/common'
import {
    FormContainer,
    Input,
    TextArea,
    DatePicker,
    Select
} from '@/components/account'
import { ErrorMessage } from "@hookform/error-message"
import { useSession } from 'next-auth/react'
import { createPowerHourAction } from '@/redux/actions/playlist-actions'
import { useAppDispatch } from '@/redux/hooks'
import { clearInstance } from '@/redux/slices/instanceSlice'
import { loading } from '@/redux/slices/loadingSlice'

const AddPowerHourForm = () => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm()
    const publishWatch = useWatch({
        control,
        name: 'publishStatus',
        defaultValue: 'false'
    })
    const privateWatch = useWatch({
        control,
        name: 'privateStatus',
        defaultValue: 'true'
    })
    const eventDateWatch = useWatch({
        control,
        name: 'dateTime',
        defaultValue: ''
    })
    const { data: session } = useSession()

    const submitHandler = (data: any) => {
        dispatch(loading())
        dispatch(createPowerHourAction(data, session?.user?.id as number))
        dispatch(clearInstance())
    }

    return (
        <FormContainer onSubmit={handleSubmit(submitHandler)}>
            <Input
                label='Title'
                name='title'
                fieldRequired='This field is required.'
                register={register}
            />
            <ErrorMessage name='title' errors={errors} as='div' className='text-vermillion'/>
            <TextArea
                label='Description'
                name='description'
                fieldRequired='This field is required.'
                register={register}
            />
            <ErrorMessage name='description' errors={errors} as='div' className='text-vermillion'/>
            <DatePicker
                label='Event date'
                name='dateTime'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    value: eventDateWatch
                }}
            />
            <ErrorMessage name='dateTime' errors={errors} as='div' className='text-vermillion'/>
            <DatePicker
                label='Submission deadline date'
                name='submissionDeadline'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    validate: {
                        value: (value: string) => {
                            if (new Date(value).valueOf() > new Date(eventDateWatch).valueOf()) {
                                return 'Sorry, your submission deadline can\'t be after your event date.'
                            }
                        }
                    }
                }}
            />
            <ErrorMessage name='submissionDeadline' errors={errors} as='div' className='text-vermillion'/>
            <Select
                currentSelection={`Your power hour is currently: ${publishWatch === 'true' ? 'Published' : 'Not Published'}`}
                label='Publish status'
                name='publishStatus'
                fieldRequired={true}
                register={register}
                options={[
                    {value: 'true', text: 'Published'},
                    {value: 'false', text: 'Not Published'}
                ]}
                registerOptions={{
                    value: publishWatch,
                    validate: {
                        value: (value: string) => {
                            if (value === 'select') {
                                return 'Please select a status'
                            } else {
                                return true
                            }
                        }
                    }
                }}
            />
            <ErrorMessage name='publishStatus' errors={errors} as='div' className='text-vermillion'/>
            <Select
                currentSelection={`Your power hour is currently ${privateWatch === 'true' ? 'Private' : 'Public'}`}
                label='Privacy status'
                name='privateStatus'
                fieldRequired={true}
                register={register}
                options={[
                    {value: 'false', text: 'Public'},
                    {value: 'true', text: 'Private'}
                ]}
                registerOptions={{
                    value: privateWatch,
                    validate: {
                        value: (value: string) => {
                            if (value === 'select') {
                                return 'Please select a status'
                            } else {
                                return true
                            }
                        }
                    }
                }}
            />
            <ErrorMessage name='privateStatus' errors={errors} as='div' className='text-vermillion'/>
            <Input
                label='Song limit per user'
                name='songLimit'
                type='number'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    minLength: {
                        value: 1,
                        message: 'This field requires a minimum of 1 digit.'
                    },
                    maxLength: {
                        value: 2,
                        message: 'This field may not exceed more than 2 digits.'
                    },
                    validate: {
                        value: (value: number) => {
                            if (value < 0) {
                                return 'This field allows only positive values.'
                            } else {
                                return true
                            }
                        }
                    }
                }}
            />
            <ErrorMessage name='songLimit' errors={errors} as='div' className='text-vermillion'/>
            <div className="py-3">
                <SubmitButton
                    bgColor='vermillion'
                />
            </div>
        </FormContainer>
    )
}

export default AddPowerHourForm