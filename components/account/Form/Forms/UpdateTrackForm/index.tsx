import { useForm, useWatch } from "react-hook-form"
import {
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    Input
} from '@/components/account'
import { UpdateTrackFormI } from '@/interfaces'
import { ErrorMessage } from "@hookform/error-message"
import { useAppDispatch } from '@/redux/hooks'
import { clearInstance } from '@/redux/slices/instanceSlice'
import { patchSongAction } from '@/redux/actions/song-actions'
import { timeConverter } from '@/utils'

const UpdateTrackForm = ({
    id,
    index,
    title,
    artist,
    startTime,
    endTime,
    album,
    year,
    youtubeLink
}: UpdateTrackFormI) => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm()
    const startTimeWatch = useWatch({
        control,
        name: 'startTime',
        defaultValue: startTime
    })

    const submit = (data: any) => {
        dispatch(clearInstance())
        dispatch(patchSongAction(index, id, data))
    }
    
    return(
        <FormContainer
            onSubmit={handleSubmit(submit)}
        >
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
            <Input
                label='Artist'
                name='artist'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    value: artist
                }}
            />
            <ErrorMessage name='artist' errors={errors} as='div' className='text-vermillion'/>
            <Input
                label='Album'
                name='album'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    value: album
                }}
            />
            <ErrorMessage name='album' errors={errors} as='div' className='text-vermillion'/>
            <Input
                label='Year'
                name='year'
                type='number'
                fieldRequired='This field is required.'
                register={register}
                registerOptions={{
                    value: year,
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
                    value: youtubeLink,
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
                    value: startTime,
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
                    value: endTime,
                    pattern: {
                        value: /^[0-9]:[0-5][0-9]$/gi,
                        message: "This field requires a pattern like — 1:55"
                    },
                    validate: {
                        value: (value: string) => {
                            let convertedStartTime = timeConverter(startTimeWatch)
                            let convertedEndTime = timeConverter(value)
                            if (convertedStartTime > convertedEndTime) {
                                return 'Sorry, your end time can\'t be less than the start time.'
                            }
                        }
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

export default UpdateTrackForm