import { useState } from 'react'
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
    AccordionDataList
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

    let currentIdx = powerHour?.publishStatus ? 0 : 1
    const [ selectedPubStatus, setPubStatus ] = useState(phPublishStatuses[currentIdx])

    const handlePowerHourPublishStatus = () => {
        if (selectedPubStatus?.status === 'Published') {
            setPubStatus(phPublishStatuses[1])
        } else {
            setPubStatus(phPublishStatuses[0])
        }
    }

    const users = powerHour?.participants?.map((participant: any) => participant?.user)
    
    return (
        <>
            <SEO />
            <DashPageLayout>
                <ComponentMargin>
                    <section className="flex flex-col md:flex-row justify-around items-center py-10">
                        <Image
                            src={powerHour?.cover_image}
                            width={250}
                            height={250}
                            alt={powerHour?.title}
                            priority
                        />
                        <section className="space-y-2.5">
                            <H1 color={2} text={powerHour?.title} />
                            <H2 color={2} text={powerHour?.description} />
                            {powerHour?.date_time &&
                                <H3 color={2} text={format(new Date(powerHour?.date_time), 'MM/dd/yyyy')}/>
                            }
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
                            <H4 text="Promotion and sharing coming soon" />
                        </section>
                    </Grid3Column>
                    <section></section>
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
        fallback: false
    }
}

export const getStaticProps = async ({params}: any) => {
    try {
        const {data } = await axios.get("http://localhost:3000/api/powerhour/" + params?.id)
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