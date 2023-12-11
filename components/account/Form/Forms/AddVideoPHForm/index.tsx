import { useForm, useWatch } from "react-hook-form"
import { SubmitButton } from '@/components/common'
import {
    FormContainer,
    Input,
    Select
} from '@/components/account'
import { ErrorMessage } from "@hookform/error-message"
import { useSession } from 'next-auth/react'
import { AddVideoPHFormI } from '@/interfaces'
import {
    useAppDispatch
} from '@/redux/hooks'
import { addTrackAction } from '@/redux/actions/song-actions'
import { clearInstance } from "@/redux/slices/instanceSlice"
import { timeConverter } from '@/utils'

const AddVideoPHForm = ({
    link,
    mappedPowerHours,
    userPowerHours
}: AddVideoPHFormI) => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm()
    const powerHourWatch = useWatch({
        control,
        name: 'powerHour',
        defaultValue: '0'
    })
    const startTimeWatch = useWatch({
        control,
        name: 'startTime',
        defaultValue: ''
    })
    const { data: session } = useSession()

    const submitHandler = (data: any) => {
        dispatch(clearInstance())
        dispatch(addTrackAction({
            title: data.title,
            artist: data.artist,
            album: data.album,
            year: data.year,
            startTime: data.startTime,
            endTime: data.endTime,
            youtubeLink: data.youtubeLink,
            powerHourId: userPowerHours[powerHourWatch].powerHour.id,
            participantId: Number(session?.user?.id),
            orderNumber: 0
        }, 0))
    }

    return (
        <FormContainer onSubmit={handleSubmit(submitHandler)}>
            <Select
                currentSelection=''
                label='Which power hour are you adding to?'
                name='powerHour'
                fieldRequired
                register={register}
                options={mappedPowerHours}
                registerOptions={{
                    validate: () => {
                        if (userPowerHours[powerHourWatch].powerHour.songLimit === userPowerHours[powerHourWatch]._count.PowerHourSongs) {
                            return 'Sorry, you have reached the limit of songs you can add to this power hour.'
                        }
                    }
                }}
            />
            <ErrorMessage name='powerHour' errors={errors} as='div' className='text-vermillion'/>
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
                    value: link,
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
                    value: startTimeWatch,
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

export default AddVideoPHForm