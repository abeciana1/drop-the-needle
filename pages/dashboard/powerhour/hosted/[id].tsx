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
    TrackList
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
import { AiFillEdit } from 'react-icons/ai'
import { useRouter } from 'next/router'
import {
    fetchPowerHour,
    fetchSongs
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
import { clearPowerHour, clearSongs, clearUnsortedSongs } from '@/redux/slices/powerHourSlice'
import { AiOutlinePlus } from 'react-icons/ai'
import { TrackDataI } from '@/interfaces'

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

const HostedPowerHourDynamic = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const powerHour = useAppSelector(state => state.powerHour.powerHour)
    const songs = useAppSelector(state => state.powerHour.songs)
    let currentIdx = powerHour?.publishStatus ? 0 : 1
    const [ selectedPubStatus, setPubStatus ] = useState(phPublishStatuses[currentIdx])
    const [ isClient, setClient ] = useState(false)

    useEffect(() => {
        setClient(true)
        if (isClient) {
            dispatch(fetchPowerHour(window.location.pathname.split('/')[4]))
            dispatch(fetchSongs(window.location.pathname.split('/')[4]))
        }
    }, [isClient])

    useEffect(() => {
        return () => {
            dispatch(clearPowerHour())
            dispatch(clearSongs())
            dispatch(clearUnsortedSongs())
        }
    }, [])

    const trackRemoveHandler = async (index: number, id: number) => {
        if (confirm(`Are you sure you want to delete this song from this power hour?`)) {
            dispatch(deleteTrackAction(index, id))
        }
    }

    const deleteHandler = async () => {
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

    const renderUpdateCoverImg = () => {
        dispatch(setInstance({
            display: true,
            name: 'updateCoverImg',
            data: {
                coverImage: powerHour?.cover_image,
            }
        }))
    }

    const renderUpdatePowerHour = () => {
        dispatch(setInstance({
            display: true,
            name: 'updatePowerHour',
            data: {
                id: powerHour.id,
                title: powerHour.title,
                description: powerHour.description,
                dateTime: powerHour.date_time,
                privateStatus: powerHour.privateStatus,
                publishStatus: powerHour.publishStatus,
                songLimit: powerHour.songLimit
            }
        }))
    }
    
    const addTrackHandler = (trackData: TrackDataI) => {
        dispatch(clearInstance())
        dispatch(addTrackAction(trackData, (songs?.length + 1)))
    }

    const renderAddTrackForm = () => {
        dispatch(setInstance({
            display: true,
            name: 'addTrack',
            data: {
                submitHandler: addTrackHandler
            }
        }))
    }

    return (
        <>
            <SEO />
            <DashPageLayout>
                <ComponentMargin>
                    <section className="flex flex-col md:flex-row justify-around items-center pt-20">
                    <div className="relative">
                        {powerHour?.cover_image &&
                            <>
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
                            </>
                        }
                    </div>
                        <section className="space-y-2.5 pt-10 md:pt-0 pl-5">
                            <H1 color={2} text={powerHour?.title} />
                            {powerHour?.date_time &&
                                <div className='text-altBlack text-2xl'>{formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy — p zzz')}</div>
                            }
                            <div className='text-altBlack text-xl'>{powerHour?.description}</div>
                            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                                <OnClickButton
                                    text='Edit Power Hour'
                                    bgColor='ceruleanBlue'
                                    icon={AiFillEdit}
                                    onClick={renderUpdatePowerHour}
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
                    <div className="font-medium flex md:flex-row flex-col-reverse justify-between md:items-end pb-2">
                        {songs?.length > 0 && '(Click on the blue button to expand details)'}
                        <OnClickButton
                            text='Add track'
                            icon={AiOutlinePlus}
                            bgColor='ceruleanBlue'
                            onClick={renderAddTrackForm}
                        />
                    </div>
                    <TrackList
                        removeHandler={trackRemoveHandler}
                        songs={songs}
                    />
                </ComponentMargin>
            </DashPageLayout>
        </>
    )
}

export default HostedPowerHourDynamic