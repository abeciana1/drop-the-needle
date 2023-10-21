import { useForm } from "react-hook-form"
import { SubmitButton } from '@/components/common'
import {
    FormContainer,
    Input
} from '@/components/account'
import { ErrorMessage } from "@hookform/error-message"
import { useSession } from 'next-auth/react'

const AddPowerHourForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { data: session } = useSession()

    const submitHandler = (data: any) => {

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
            
        </FormContainer>
    )
}

export default AddPowerHourForm