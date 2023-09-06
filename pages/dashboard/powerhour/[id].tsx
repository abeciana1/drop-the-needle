import { useEffect, useState } from 'react'
import {
    DashPageLayout,
    SEO,
    ComponentMargin,
    Grid3Column
} from '@/components/common'
import {
    H1,
    H2,
    H3,
    H4
} from '@/components/styled'
import {
    SingleSelectField,
    AccordionDataList,
    TrackList,
    UpdatePowerHourForm
} from '@/components/account'
import axios from 'axios'
import { PowerHourDynamicPageI } from '@/interfaces'
import Image from 'next/image'
import { format } from 'date-fns'
import {
    HiEye,
    HiEyeOff,
    HiOutlineUserCircle
} from "react-icons/hi"

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

const PowerHourDynamic = ({ powerHour }: PowerHourDynamicPageI) => {
    const [ powerHourObj, setPowerHour ] = useState({
        id: powerHour?.id,
        title: powerHour?.title,
        description: powerHour?.description,
        coverImage: powerHour?.cover_image,
        dateTime: powerHour?.date_time,
        privateStatus: powerHour?.privateStatus,
        publishStatus: powerHour?.publishStatus,
        songLimit: powerHour?.songLimit,
    })
    let currentIdx = powerHourObj?.publishStatus ? 0 : 1
    const [ selectedPubStatus, setPubStatus ] = useState(phPublishStatuses[currentIdx])
    const [ songList, setSongList ]: any = useState([])

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

    const removeHandler = (index: number) => {
        if (confirm(`Are you sure you want to delete song from this power hour?`)) {
            let newSongs = [...songList]
            newSongs.splice(index, 1)
            setSongList(newSongs)
            axios.delete('/api/track/' + index)
        }
    }

    const handlePowerHourPublishStatus = () => {
        if (selectedPubStatus?.status === 'Published') {
            setPubStatus(phPublishStatuses[1])
            // todo add patch api call
        } else {
            setPubStatus(phPublishStatuses[0])
            // todo add patch api call
        }
    }

    const users = powerHour?.participants?.map((participant: any) => participant?.user)

    const updatePlaylistSubmitHandler = async (e: React.FormEvent<HTMLFormElement>, data: any) => {
        e.stopPropagation()
        e.preventDefault()
        setPowerHour({
            ...powerHourObj,
            title: data?.title,
            description: data?.description,
            coverImage: data?.coverImage,
            dateTime: data?.dateTime,
            privateStatus: data?.privateStatus,
            publishStatus: data?.publishStatus,
            songLimit: data?.songLimit
        })
        await axios.patch(`/api/powerhour/${powerHour?.id}`, {
            title: data?.title,
            description: data?.description,
            cover_image: data?.coverImage,
            date_time: data?.dateTime,
            privateStatus: data?.privateStatus,
            publishStatus: data?.publishStatus,
            songLimit: data?.songLimit
        })
        .catch(err => console.error({err}))
    }

    return (
        <>
            <SEO />
            <DashPageLayout>
                <ComponentMargin>
                    {powerHour &&
                        <section className="flex flex-col md:flex-row justify-around items-center py-10">
                            <Image
                                src={powerHourObj?.coverImage}
                                width={250}
                                height={250}
                                alt={powerHour?.title}
                                priority
                            />
                            <section className="space-y-2.5">
                                <H1 color={2} text={powerHourObj?.title} />
                                <H2 color={2} text={powerHourObj?.description} />
                                {powerHourObj?.dateTime &&
                                    <H3 color={2} text={format(new Date(powerHourObj?.dateTime), 'MM/dd/yyyy')}/>
                                }
                                <UpdatePowerHourForm
                                    title={powerHourObj?.title}
                                    description={powerHourObj?.description}
                                    coverImage={powerHourObj?.coverImage}
                                    dateTime={powerHourObj?.dateTime}
                                    privateStatus={powerHourObj?.privateStatus}
                                    publishStatus={powerHourObj?.publishStatus}
                                    songLimit={powerHourObj?.songLimit}
                                    submitHandler={updatePlaylistSubmitHandler}
                                />
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
                            <H4 text="Promotion and sharing coming soon" />
                        </section>
                    </Grid3Column>
                    <div className="my-5 font-medium">Song limit: {powerHour?.songLimit}</div>
                    <TrackList
                        removeHandler={removeHandler}
                        songs={songList}
                    />
                </ComponentMargin>
            </DashPageLayout>
        </>
    )
}

export const getStaticPaths = async () => {
    const { data } = await axios.get("http://localhost:3000/api/powerhour/get-all-ids")
    let powerHourPaths: number[] = []
    data?.powerHoursIds.map((powerHour: any) => {
        return ({ params: {id: powerHour.id.toString()}})
    })
    return {
        paths: powerHourPaths,
        fallback: true
    }
}

export const getStaticProps = async ({params}: any) => {
    try {
        const { data } = await axios.get("http://localhost:3000/api/powerhour/" + params?.id)
        return {
            props: {
                powerHour: data?.powerHour
            }
        }
    } catch (error) {
        return {
            props: {
                powerHour: null
            },
            revalidate: 10
        }
    }
}

export default PowerHourDynamic