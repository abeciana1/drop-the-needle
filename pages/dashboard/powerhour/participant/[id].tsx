import { useEffect, useState } from 'react'
import {
    DashPageLayout,
    SEO,
    ComponentMargin,
    Grid2Column
} from '@/components/common'
import { H1 } from '@/components/styled'
import {
    AccordionDataList,
    TrackList
} from '@/components/account'
import Image from 'next/image'
import { formatInTimeZone } from 'date-fns-tz'
import { HiOutlineUserCircle } from "react-icons/hi"
import { TrackDataI } from '@/interfaces'
import { fetchPowerHour } from '@/redux/actions/playlist-actions'
import {
    addTrackAction,
    deleteTrackAction
} from '@/redux/actions/song-actions'
import {
    useAppSelector,
    useAppDispatch
} from '@/redux/hooks'
import { clearInstance } from '@/redux/slices/instanceSlice'
import { clearPowerHour, clearSongs } from '@/redux/slices/powerHourSlice'
import { fetchUserSongsAction } from '@/redux/actions/user-actions'
import { useSession } from 'next-auth/react'

const ParticipantPowerHourDynamic = () => {
    const dispatch = useAppDispatch()
    const powerHour = useAppSelector(state => state.powerHour.powerHour)
    const songs = useAppSelector(state => state.powerHour.songs)
    const [ isClient, setClient ] = useState(false)
    const { data: session } = useSession()

    useEffect(() => {
        setClient(true)
        if (isClient) {
            dispatch(fetchPowerHour(window.location.pathname.split('/')[4]))
        }
    }, [isClient])

    useEffect(() => {
        if (session && powerHour) {
            dispatch(fetchUserSongsAction(Number(session?.user?.id), Number(powerHour.id)))
        }
    }, [session, powerHour])

    useEffect(() => {
        return () => {
            dispatch(clearPowerHour())
            dispatch(clearSongs())
        }
    }, [])

    const trackRemoveHandler = async (index: number, id: number) => {
        if (confirm(`Are you sure you want to delete this song from this power hour?`)) {
            dispatch(deleteTrackAction(index, id))
        }
    }

    const users = powerHour?.participants?.map((participant: any) => participant?.user)

    const addTrackHandler = (trackData: TrackDataI) => {
        dispatch(clearInstance())
        dispatch(addTrackAction(trackData, (songs?.length + 1)))
    }

    // todo limit addTrackHandler based on el length
    // todo Create modal disclaimer  -> reached power hour song limit
    // todo 

    return (
        <>
            <SEO />
            <DashPageLayout>
                <ComponentMargin>
                    <section className="flex flex-col md:flex-row justify-around items-center pt-20">
                    <div className="relative">
                        <Image
                            src={powerHour?.cover_image}
                            width={250}
                            height={250}
                            alt={powerHour?.title}
                            className='w-60 h-60'
                        />
                    </div>
                        <section className="space-y-2.5 pt-10 md:pt-0 pl-5">
                            <H1 color={2} text={powerHour?.title} />
                            {powerHour?.date_time &&
                                <div className='text-altBlack text-2xl'>{formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy — p zzz')}</div>
                            }
                            <div className='text-altBlack text-xl'>{powerHour?.description}</div>
                        </section>
                    </section>
                    <Grid2Column>
                        <AccordionDataList
                            icon={HiOutlineUserCircle}
                            heading='Participant list'
                            dataSource={users}
                            size='md'
                            property='name'
                        />
                        <section>
                            <div className='text-altBlack text-2xl font-medium'>Promotion and sharing coming soon</div>
                        </section>
                    </Grid2Column>
                    <div className="my-5 font-medium">Song limit per user: {powerHour?.songLimit}</div>
                    <TrackList
                        removeHandler={trackRemoveHandler}
                        songs={songs}
                        addTrackHandler={addTrackHandler}
                        participantList
                    />
                </ComponentMargin>
            </DashPageLayout>
        </>
    )
}

export default ParticipantPowerHourDynamic