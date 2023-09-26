import { useState } from 'react'
import {
    AddTrackFormI,
    TrackDataI
} from '@/interfaces'
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

const AddTrackForm = ({
    powerHourId,
    submitHandler
}: AddTrackFormI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [ edit, setEdit ] = useState(false)

    const submit = (data: any) => {
        submitHandler(data)
    }

    return (
        <FormContainer onSubmit={handleSubmit(submit)}>
            <div className="py-3">
                <SubmitButton
                    bgColor='vermillion'
                />
            </div>
        </FormContainer>
    )
}

export default AddTrackForm