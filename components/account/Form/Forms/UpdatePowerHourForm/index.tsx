import { useForm, useWatch } from "react-hook-form"
import { SubmitButton } from '@/components/common'
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
import { clearInstance } from '@/redux/slices/instanceSlice'
import { useAppDispatch } from '@/redux/hooks'
import { updatePowerHourAction } from '@/redux/actions/playlist-actions'

const UpdatePowerHourForm = ({
    id,
    title,
    description,
    dateTime,
    privateStatus,
    publishStatus,
    songLimit
}: UpdatePowerHourFormI) => {
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
        defaultValue: publishStatus === true ? 'true' : 'false'
    })
    const privateWatch = useWatch({
        control,
        name: 'privateStatus',
        defaultValue: privateStatus === true ? 'true' : 'false'
    })
    let formattedDate;

    const submit = (data: any) => {
        dispatch(clearInstance())
        dispatch(updatePowerHourAction(id, {
            title: data.title,
            description: data.description,
            date_time: data.dateTime,
            privateStatus: data.privateStatus,
            publishStatus: data.publishStatus,
            songLimit: data.songLimit
        }))
    }
    
    if (dateTime) {
        formattedDate = format(new Date(dateTime), 'yyyy-MM-dd HH:mm')
    }

    return (
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
                    value: publishWatch
                }}
            />
            <ErrorMessage name='publishStatus' errors={errors} as='div' className='text-vermillion'/>
            <Select
                currentSelection={`Your power hour is currently: ${privateWatch === 'true' ? 'Public' : 'Private'}`}
                label='Privacy status'
                name='privateStatus'
                fieldRequired={true}
                register={register}
                options={[
                    {value: 'true', text: 'Public'},
                    {value: 'false', text: 'Private'}
                ]}
                registerOptions={{
                    value: privateWatch
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
    )
}

export default UpdatePowerHourForm