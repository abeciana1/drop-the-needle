import { useEffect, useState } from 'react'
import { InviteFormI } from '@/interfaces'
import { ExpandBtn } from '@/components/common'
import {
    AiOutlineCheck,
    AiOutlineQuestion,
    AiOutlineClose
} from 'react-icons/ai'
import { PillTag } from '@/components/account'
import { useAppDispatch } from '@/redux/hooks'
import {
    setInstance,
    clearInstance
} from '@/redux/slices/instanceSlice'
import { patchInvite } from '@/redux/slices/inviteSlice'

const InviteForm = ({
    id,
    index,
    title,
    description,
    date,
    time,
    rsvpYes,
    rsvpNo,
    rsvpMaybe
}: InviteFormI) => {
    const [ isClient, setClient ] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isClient) {
            setClient(true)
        }
    }, [isClient])

    const rsvpYesHandler = () => {
        if (isClient) {
            // * set location href
        }
        dispatch(patchInvite({
            index: index,
            rsvpYes: true,
            rsvpNo: false,
            rsvpMaybe: false
        }))
    }

    const rsvpNoHandler = () => {
        dispatch(clearInstance())
        dispatch(patchInvite({
            index: index,
            rsvpYes: false,
            rsvpNo: true,
            rsvpMaybe: false
        }))
    }

    const rsvpMaybeHandler = () => {
        dispatch(clearInstance())
        dispatch(patchInvite({
            index: index,
            rsvpYes: false,
            rsvpNo: false,
            rsvpMaybe: true
        }))
    }

    return (
        <section>
            {(rsvpYes && !rsvpNo && !rsvpMaybe) &&
                <PillTag text='Attending' color='green' />
            }
            {(!rsvpYes && rsvpNo && !rsvpMaybe) &&
                <PillTag text='Not attending' color='red' />
            }
            {(!rsvpYes && !rsvpNo && rsvpMaybe) &&
                <PillTag text='Might attend' color='blue' />
            }
            {(!rsvpYes && !rsvpNo && !rsvpMaybe) &&
                <PillTag text='Undecided' color='gray' />
            }
            <div className="text-2xl font-medium">RSVP for { title }</div>
            <div className="text-xl">Power Hour description: { description }</div>
            <div className="py-3 text-xl">Date: { date }</div>
            <div className="py-3 text-xl">Time { time }</div>
            <section className='flex gap-5 justify-center'>
                <ExpandBtn
                    text='Yes'
                    icon={AiOutlineCheck}
                    size={6}
                    backgroundColor='bg-green-400'
                    onClick={rsvpYesHandler}
                />
                <ExpandBtn
                    text='Maybe'
                    icon={AiOutlineQuestion}
                    size={7}
                    backgroundColor='ceruleanBlue'
                    onClick={rsvpMaybeHandler}
                />
                <ExpandBtn
                    text='No'
                    icon={AiOutlineClose}
                    size={5}
                    backgroundColor='vermillion'
                    onClick={rsvpNoHandler}
                />
            </section>
        </section>
    )
}

export default InviteForm