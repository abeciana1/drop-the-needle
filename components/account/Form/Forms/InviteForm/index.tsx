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
import { clearInstance } from '@/redux/slices/instanceSlice'
import { patchInvite } from '@/redux/slices/inviteSlice'
import { updateInvitesAction } from '@/redux/actions/invite-actions'
import { createParticipantAction, deleteParticipantAction } from'@/redux/actions/playlist-actions'

const InviteForm = ({
    id,
    inviteId,
    userId,
    index,
    title,
    description,
    date,
    time,
    rsvpYes,
    rsvpNo,
    rsvpMaybe,
    submissionDeadline
}: InviteFormI) => {
    const [ isClient, setClient ] = useState(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (isClient) {
            setClient(true)
        }
    }, [isClient])

    const rsvpYesHandler = () => {
        dispatch(createParticipantAction(id, userId))
        dispatch(clearInstance())
        if (!rsvpYes) {
            dispatch(patchInvite({
                index: index,
                rsvpYes: true,
                rsvpNo: false,
                rsvpMaybe: false
            }))
            dispatch(updateInvitesAction(inviteId, {
                rsvpYes: true,
                rsvpNo: false,
                rsvpMaybe: false
            }))

        }
    }

    const rsvpNoHandler = () => {
        if (rsvpYes) {
            dispatch(deleteParticipantAction(id, userId))
        }
        dispatch(clearInstance())
        dispatch(patchInvite({
            index: index,
            rsvpYes: false,
            rsvpNo: true,
            rsvpMaybe: false
        }))
        dispatch(updateInvitesAction(inviteId, {
            rsvpYes: false,
            rsvpNo: true,
            rsvpMaybe: false
        }))
    }

    const rsvpMaybeHandler = () => {
        if (rsvpYes) {
            dispatch(deleteParticipantAction(id, userId))
        }
        dispatch(clearInstance())
        dispatch(patchInvite({
            index: index,
            rsvpYes: false,
            rsvpNo: false,
            rsvpMaybe: true
        }))
        dispatch(updateInvitesAction(inviteId, {
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
            <div className="py-3 text-xl">Submission deadline: { submissionDeadline }</div>
            <div className="py-3 text-xl">Date: { date }</div>
            <div className="py-3 text-xl">Time { time }</div>
            {rsvpYes &&
                <div className="py-3 text-xl">
                    You can visit the power hour page <a className="text-ceruleanBlue" href={`/dashboard/powerhour/participant/${encodeURI(id.toString())}`} title={'link to' + title + ' - participant page'}>here</a>.
                </div>
            }
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