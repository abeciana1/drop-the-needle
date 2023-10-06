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
    HiOutlineUserCircle
} from "react-icons/hi"
import { useRouter } from 'next/router'
import { TrackDataI } from '@/interfaces'
import {
    fetchPowerHour,
    fetchSongs
} from '@/redux/actions/playlist-actions'
import {
    useAppSelector,
    useAppDispatch
} from '@/redux/hooks'

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

    useEffect(() => {
        if (window) {
            let id = window.location.pathname.split('/')[3]
            dispatch(fetchPowerHour(id))
            
        }
    }, [])

    let currentIdx = powerHour?.publishStatus ? 0 : 1
    const [ selectedPubStatus, setPubStatus ] = useState(phPublishStatuses[currentIdx])


    const trackRemoveHandler = async (index: number) => {
        // todo create deleteSongAction
        if (confirm(`Are you sure you want to delete this song from this power hour?`)) {
            let newSongs = [...songs]
            newSongs.splice(index, 1)
            // setSongList(newSongs)
            await axios.delete('/api/track/' + index)
        }
    }

    const deleteHandler = async () => {
        // todo create deleteAction
        if (confirm('Are you sure you want to delete this power hour?')) {
            router.push('/dashboard')
            await axios.delete('/api/track/' + powerHour.id)
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
        //todo create updatePowerHourAction
        // setPowerHour({
        //     ...powerHour,
        //     title: data?.title,
        //     description: data?.description,
        //     date_time: data?.dateTime,
        //     privateStatus: data?.privateStatus === 'true',
        //     publishStatus: data?.publishStatus === 'true',
        //     songLimit: data?.songLimit
        // })
        // await axios.patch(`/api/powerhour/${powerHour?.id}`, {
        //     title: data?.title,
        //     description: data?.description,
        //     date_time: new Date(data?.dateTime),
        //     privateStatus: data?.privateStatus === 'true',
        //     publishStatus: data?.publishStatus === 'true',
        //     songLimit: data?.songLimit
        // })
        // .then(res => console.log('res', res))
        // .catch(err => console.error({err}))
    }

    const addTrackHandler = (trackData: TrackDataI) => {
        console.log('trackData', trackData)
        // * order number pushed to back -> orderNumber === ph.length - 1
        // * add power hour id to payload
        // * Create react portal hovering overlay -> loading animation
        // let newSongList:[] = [...songList, trackData]
        // setSongList(newSongList)
        //! axios post req
    }

//     <FileUpload
// label='Cover image'
// value={coverImage}
// name='coverImage'
// fieldRequired={true}
// register={register}
// registerOptions={{
//     validate: {
//         acceptedFormats: (files: File[]) => {
//             console.log(files)
//             return ["image/jpeg", "image/png", "image/webp"].includes(
//                 files[0]?.type
//             ) || "Only PNG, JPEG, or WEBP"
//         }
//     }
// }}
// acceptedFileTypes="image/jpeg, image/png, image/webp"
// />
// <ErrorMessage name='coverImage' errors={errors} as='div' className='text-vermillion'/>

    return (
        <>
            <SEO />
            <DashPageLayout>
                <ComponentMargin>
                    {powerHour &&
                        <section className="flex flex-col md:flex-row justify-around items-center pt-20">
                            <Image
                                src={powerHour?.cover_image }
                                width={250}
                                height={250}
                                alt={powerHour?.title}
                                priority
                            />
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
                    }
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