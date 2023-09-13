import { useState } from 'react'
import { useForm } from "react-hook-form"
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    Input
} from '@/components/account'
import { UpdatePowerHourFormI } from '@/interfaces'
import { ErrorMessage } from "@hookform/error-message"

const UpdatePowerHourForm = ({
    title,
    description,
    coverImage,
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

    const submit = (data: any) => {
        setEdit(!edit)
        submitHandler(data)
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