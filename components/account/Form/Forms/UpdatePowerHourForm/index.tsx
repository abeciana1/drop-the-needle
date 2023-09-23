import { useState } from 'react'
import { useForm } from "react-hook-form"
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    Input,
    TextArea,
    DatePicker
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
    } = useForm()
    const [ edit, setEdit ] = useState(false)
    let formattedDate;

    const submit = (data: any) => {
        setEdit(!edit)
        // submitHandler(data)
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
                        // validate: {
                        //     value: (value: number | Date) => {
                        //         console.log(isBefore(value, new Date()))
                        //             if (isBefore(value, new Date())) {
                        //                 return `Invalid`
                        //             } else {
                        //                 return true
                        //             }
                        //         }
                        //     }
                        }
                    }
                />
                <ErrorMessage name='dateTime' errors={errors} as='div' className='text-vermillion'/>
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