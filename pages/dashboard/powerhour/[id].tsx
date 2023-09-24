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
    const router = useRouter()

    useEffect(() => {
        if (window) {
            let id = window.location.pathname.split('/')[3]
            axios.get("/api/powerhour/get-songs/" + id)
            .then((response) => {
                setSongList(response?.data?.sortedSongs)
            })
            .catch(err => console.error({err}))
        }
    }, [])

    useEffect(() => {
        if (window) {
            let id = window.location.pathname.split('/')[3]
            axios.get("/api/powerhour/" + id)
            .then((res) => {
                setPowerHour(res?.data?.powerHour)
            })
            .catch(err => console.error({err}))
        }
    }, [])

    const [ powerHourObj, setPowerHour ] = useState({
        id: 0,
        title: '',
        description: '',
        cover_image: '',
        date_time: '',
        privateStatus: false,
        publishStatus: false,
        participants: [],
        songLimit: 0
    })

    let currentIdx = powerHourObj?.publishStatus ? 0 : 1
    const [ selectedPubStatus, setPubStatus ] = useState(phPublishStatuses[currentIdx])
    const [ songList, setSongList ] = useState([])

    const trackRemoveHandler = (index: number) => {
        if (confirm(`Are you sure you want to delete this song from this power hour?`)) {
            let newSongs = [...songList]
            newSongs.splice(index, 1)
            setSongList(newSongs)
            axios.delete('/api/track/' + index)
        }
    }

    const deleteHandler = () => {
        if (confirm('Are you sure you want to delete this power hour?')) {
            router.push('/dashboard')
            //! axios delete
        }
    }

    const handlePowerHourPublishStatus = async () => {
        if (selectedPubStatus?.status === 'Published') {
            setPubStatus(phPublishStatuses[1])
            await axios.patch(`/api/powerhour/${powerHourObj?.id}`, {
                publishStatus: phPublishStatuses[1].bool
            })
        } else {
            setPubStatus(phPublishStatuses[0])
            await axios.patch(`/api/powerhour/${powerHourObj?.id}`, {
                publishStatus: phPublishStatuses[0].bool
            })
        }
    }

    const users = powerHourObj?.participants?.map((participant: any) => participant?.user)

    const updatePlaylistSubmitHandler = async (data: any) => {
        setPowerHour({
            ...powerHourObj,
            title: data?.title,
            description: data?.description,
            date_time: data?.dateTime,
            privateStatus: data?.privateStatus === 'true',
            publishStatus: data?.publishStatus === 'true',
            songLimit: data?.songLimit
        })
        await axios.patch(`/api/powerhour/${powerHourObj?.id}`, {
            title: data?.title,
            description: data?.description,
            date_time: new Date(data?.dateTime),
            privateStatus: data?.privateStatus === 'true',
            publishStatus: data?.publishStatus === 'true',
            songLimit: data?.songLimit
        })
        .then(res => console.log('res', res))
        .catch(err => console.error({err}))
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
                    {powerHourObj &&
                        <section className="flex flex-col md:flex-row justify-around items-center pt-20">
                            <Image
                                src={powerHourObj?.cover_image }
                                width={250}
                                height={250}
                                alt={powerHourObj?.title}
                                priority
                            />
                            <section className="space-y-2.5 pt-10 md:pt-0 pl-5">
                                <H1 color={2} text={powerHourObj?.title} />
                                {powerHourObj?.date_time &&
                                    <div className='text-altBlack text-2xl'>{formatInTimeZone(new Date(powerHourObj?.date_time), 'America/Los_Angeles', 'MM/dd/yyyy — p zzz') + " / " + formatInTimeZone(new Date(powerHourObj?.date_time), 'America/New_York', 'p zzz')}</div>
                                }
                                <div className='text-altBlack text-xl'>{powerHourObj?.description}</div>
                                <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                                    <UpdatePowerHourForm
                                        title={powerHourObj?.title}
                                        description={powerHourObj?.description}
                                        dateTime={powerHourObj?.date_time}
                                        privateStatus={powerHourObj?.privateStatus}
                                        publishStatus={powerHourObj?.publishStatus}
                                        songLimit={powerHourObj?.songLimit}
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
                    <div className="my-5 font-medium">Song limit per user: {powerHourObj?.songLimit}</div>
                    <TrackList
                        removeHandler={trackRemoveHandler}
                        songs={songList}
                    />
                </ComponentMargin>
            </DashPageLayout>
        </>
    )
}

export default PowerHourDynamic