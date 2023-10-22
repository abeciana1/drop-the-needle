import { useState } from 'react'
import { useForm, useWatch } from "react-hook-form"
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    Input,
    TextArea,
    DatePicker,
    Select
} from '@/components/account'
import { UpdatePowerHourFormI } from '@/interfaces'
import { ErrorMessage } from "@hookform/error-message"
import { format } from 'date-fns'

const UpdatePowerHourForm = ({
    title,
    description,
    dateTime,
    privateStatus,
    publishStatus,
    songLimit,
    submitHandler
}: UpdatePowerHourFormI) => {
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
        defaultValue: 'false'
    })
    const [ edit, setEdit ] = useState(false)
    let formattedDate;

    const submit = (data: any) => {
        setEdit(!edit)
        submitHandler(data)
    }
    
    if (dateTime) {
        formattedDate = format(new Date(dateTime), 'yyyy-MM-dd HH:mm')
    }

    return (
        <ModalComp
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
            text='Edit Power Hour'
            bgColor='ceruleanBlue'
            onClick={() => setEdit(true)}
            render={edit}
            setRender={setEdit}
        >
            <FormContainer onSubmit={handleSubmit(submit)}>
                <Input
                    label='Title'
                    name='title'
                    fieldRequired='This field is required.'
                    register={register}
                    registerOptions={{
                        value: title
                    }}
                />
                <ErrorMessage name='title' errors={errors} as='div' className='text-vermillion'/>
                <TextArea
                    label='Description'
                    name='description'
                    fieldRequired='This field is required.'
                    register={register}
                    registerOptions={{
                        value: description
                    }}
                />
                <ErrorMessage name='description' errors={errors} as='div' className='text-vermillion'/>
                <DatePicker
                    label='Event date'
                    name='dateTime'
                    fieldRequired='This field is required.'
                    register={register}
                    registerOptions={{
                        value: formattedDate,
                    }}
                />
                <ErrorMessage name='dateTime' errors={errors} as='div' className='text-vermillion'/>
                <Select
                    currentSelection={`Your power hour is currently: ${publishWatch ? 'Published' : 'Not Published'}`}
                    label='Publish status'
                    name='publishStatus'
                    fieldRequired={true}
                    register={register}
                    options={[
                        {value: 'true', text: 'Published'},
                        {value: 'false', text: 'Not Published'}
                    ]}
                    registerOptions={{
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
                    currentSelection={`Your power hour is currently ${privateWatch ? 'Private' : 'Public'}`}
                    label='Privacy status'
                    name='privateStatus'
                    fieldRequired={true}
                    register={register}
                    options={[
                        {value: 'true', text: 'Public'},
                        {value: 'false', text: 'Private'}
                    ]}
                    registerOptions={{
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
                        value: songLimit,
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
        </ModalComp>
    )
}

export default UpdatePowerHourForm