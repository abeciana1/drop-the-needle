import { useEffect, useState } from 'react'
import {
    DashPageLayout,
    SEO,
    ComponentMargin,
    Grid3Column,
    OnClickButton
} from '@/components/common'
import {
    H1
} from '@/components/styled'
import {
    SingleSelectField,
    AccordionDataList,
    TrackList,
    UpdatePowerHourForm
} from '@/components/account'
import axios from 'axios'
import Image from 'next/image'
import { formatInTimeZone } from 'date-fns-tz'
import {
    HiEye,
    HiEyeOff,
    HiOutlineUserCircle,
    HiPhotograph
} from "react-icons/hi"
import { useRouter } from 'next/router'
import { TrackDataI } from '@/interfaces'
import {
    fetchPowerHour,
    fetchSongs,
    updatePowerHour
} from '@/redux/actions/playlist-actions'
import {
    addTrackAction,
    deleteTrackAction
} from '@/redux/actions/song-actions'
import {
    useAppSelector,
    useAppDispatch
} from '@/redux/hooks'
import {
    setInstance,
    clearInstance
} from '@/redux/slices/instanceSlice'

const phPublishStatuses = [
    {
        status: 'Published',
        bool: true
    },
    {
        status: 'Not Published',
        bool: false
    }
]

const PowerHourDynamic = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const powerHour = useAppSelector(state => state.powerHour.powerHour)
    const songs = useAppSelector(state => state.powerHour.songs)
    let currentIdx = powerHour?.publishStatus ? 0 : 1
    const [ selectedPubStatus, setPubStatus ] = useState(phPublishStatuses[currentIdx])

    useEffect(() => {
        if (window) {
            dispatch(fetchPowerHour(window.location.pathname.split('/')[3]))
            dispatch(fetchSongs(window.location.pathname.split('/')[3]))
        }
    }, [])

    const trackRemoveHandler = async (index: number, id: number) => {
        if (confirm(`Are you sure you want to delete this song from this power hour?`)) {
            dispatch(deleteTrackAction(index, id))
        }
    }

    const deleteHandler = async () => {
        // todo create deleteAction
        if (confirm('Are you sure you want to delete this power hour?')) {
            router.push('/dashboard')
            await axios.delete('/api/powerhour/' + powerHour.id)
        }
    }

    const handlePowerHourPublishStatus = async () => {
        if (selectedPubStatus?.status === 'Published') {
            setPubStatus(phPublishStatuses[1])
            await axios.patch(`/api/powerhour/${powerHour?.id}`, {
                publishStatus: phPublishStatuses[1].bool
            })
        } else {
            setPubStatus(phPublishStatuses[0])
            await axios.patch(`/api/powerhour/${powerHour?.id}`, {
                publishStatus: phPublishStatuses[0].bool
            })
        }
    }

    const users = powerHour?.participants?.map((participant: any) => participant?.user)

    const updatePlaylistSubmitHandler = async (data: any) => {
        dispatch(clearInstance())
        dispatch(updatePowerHour(powerHour?.id, data))
    }

    const addTrackHandler = (trackData: TrackDataI) => {
        dispatch(clearInstance())
        dispatch(addTrackAction(trackData, (songs?.length + 1)))
    }

    const renderUpdateCoverImg = () => {
        dispatch(setInstance({
            display: true,
            name: 'updateCoverImg',
            data: {
                coverImage: powerHour?.cover_image,
            }
        }))
    }

    // const submitUpdateCoverImg = () => {
    // }

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
                        <button
                            onClick={renderUpdateCoverImg}
                            className='absolute bottom-0 right-0 bg-ceruleanBlue h-10 w-10'
                        >
                            <HiPhotograph
                                fill='#f8f8f8'
                                className="h-8 w-8 mx-auto"
                            />
                        </button>
                    </div>
                        <section className="space-y-2.5 pt-10 md:pt-0 pl-5">
                            <H1 color={2} text={powerHour?.title} />
                            {powerHour?.date_time &&
                                <div className='text-altBlack text-2xl'>{formatInTimeZone(new Date(powerHour?.date_time), 'America/Los_Angeles', 'MM/dd/yyyy — p zzz') + " / " + formatInTimeZone(new Date(powerHour?.date_time), 'America/New_York', 'p zzz')}</div>
                            }
                            <div className='text-altBlack text-xl'>{powerHour?.description}</div>
                            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                                <UpdatePowerHourForm
                                    title={powerHour?.title}
                                    description={powerHour?.description}
                                    dateTime={powerHour?.date_time}
                                    privateStatus={powerHour?.privateStatus}
                                    publishStatus={powerHour?.publishStatus}
                                    songLimit={powerHour?.songLimit}
                                    submitHandler={updatePlaylistSubmitHandler}
                                />
                                <OnClickButton
                                    text='Delete Power Hour'
                                    bgColor='vermillion'
                                    onClick={deleteHandler}
                                />
                            </div>
                        </section>
                    </section>
                    <Grid3Column>
                        <SingleSelectField
                            icon={selectedPubStatus?.bool ? HiEye : HiEyeOff}
                            labelText='Set publish status'
                            dataSource={phPublishStatuses}
                            property='status'
                            selectedValue={selectedPubStatus}
                            setSelectedValue={handlePowerHourPublishStatus}
                        />
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
                    </Grid3Column>
                    <div className="my-5 font-medium">Song limit per user: {powerHour?.songLimit}</div>
                    <TrackList
                        removeHandler={trackRemoveHandler}
                        songs={songs}
                        addTrackHandler={addTrackHandler}
                    />
                </ComponentMargin>
            </DashPageLayout>
        </>
    )
}

export default PowerHourDynamic