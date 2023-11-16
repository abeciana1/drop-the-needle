import { DashPowerHourType } from "@/types"
import Link from 'next/link'
import Image from 'next/image'
import { InviteCardI } from '@/interfaces'
import { setInstance } from "@/redux/slices/instanceSlice"
import {
    useAppDispatch
} from '@/redux/hooks'
import { PillTag } from '@/components/account';

const PlaylistCard = ({
    id,
    title,
    cover_image,
    publicLink = false,
    date,
    time,
    hostedLink = false
}: DashPowerHourType) => {
    let href = `/${publicLink ? 'listen/' : 'dashboard/powerhour/participant/'}${encodeURI(id.toString())}`
    let hostedHref = `/dashboard/powerhour/hosted/${encodeURI(id.toString())}`

    return (
        <Link
            href={hostedLink ? hostedHref : href}
            title={title}
            className="text-xl font-semiBold"
        >
            <Image
                src={cover_image}
                priority
                alt={title}
                width={225}
                height={225}
                className='w-56 h-56 mx-auto'
            />
            <div className='text-center'>
                {title}
            </div>
            <div className='text-center'>{date}</div>
            <div className='text-center'>{time}</div>
        </Link>
    )
}

export default PlaylistCard

export const InviteCard = ({
    id,
    index,
    inviteId,
    userId,
    title,
    description,
    cover_image,
    date,
    time,
    rsvpYes,
    rsvpNo,
    rsvpMaybe,
    submissionDeadline
}: InviteCardI) => {
    const dispatch = useAppDispatch()

    const renderInviteModal = () => {
        dispatch(setInstance({
            display: true,
            name: 'inviteModal',
            data: {
                id: id,
                inviteId: inviteId,
                userId: userId,
                index: index,
                title: title,
                description: description,
                date: date,
                time: time,
                rsvpYes: rsvpYes,
                rsvpNo: rsvpNo,
                rsvpMaybe: rsvpMaybe,
                submissionDeadline: submissionDeadline
            }
        }))
    }

    return (
        <>
            <div>
                <div className="text-center">
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
                </div>
                <div onClick={renderInviteModal} className="text-xl font-semiBold">
                    <Image
                        src={cover_image}
                        priority
                        alt={title}
                        width={225}
                        height={225}
                        className='w-56 h-56 mx-auto'
                    />
                    <div className='text-center'>
                        {title}
                    </div>
                    <div className='text-center'>{date}</div>
                    <div className='text-center'>{time}</div>
                </div>
            </div>
        </>
    )
}