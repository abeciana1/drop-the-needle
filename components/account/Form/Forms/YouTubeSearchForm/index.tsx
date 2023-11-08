import { useForm } from "react-hook-form"
import { SubmitButton } from '@/components/common'
import {
    FormContainer,
    Input
} from '@/components/account'
import { ErrorMessage } from "@hookform/error-message"
import { searchYouTubeAction } from '@/redux/actions/user-actions'
import { useAppDispatch } from '@/redux/hooks'

const YouTubeSearchForm = () => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const submitHandler = (data: any) => {
        dispatch(searchYouTubeAction(data.search))
    }

    return(
        <FormContainer onSubmit={handleSubmit(submitHandler)}>
            <div className="flex gap-10 w-full">
                <div>
                    <Input
                        hideLabel
                        label='Search...'
                        placeholder='Search...'
                        name='search'
                        fieldRequired='This field is required.'
                        register={register}
                    />
                    <ErrorMessage name='search' errors={errors} as='div' className='text-vermillion' />
                </div>
                <SubmitButton
                    bgColor='vermillion'
                />
            </div>
        </FormContainer>
    )
}

export default YouTubeSearchForm