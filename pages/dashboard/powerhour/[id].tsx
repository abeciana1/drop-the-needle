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
    H3
} from '@/components/styled'
import {
    SingleSelectField
} from '@/components/account'
import axios from 'axios'
import { PowerHourDynamicPageI } from '@/interfaces'
import Image from 'next/image'
import { format } from 'date-fns'
import {
    HiEye,
    HiEyeOff
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
    console.log({powerHour})

    let currentIdx = powerHour?.publishStatus ? 0 : 1
    const [ publishStatus, setPubStatus ] = useState(phPublishStatuses[currentIdx])

    const handlePowerHourPublishStatus = () => {
        if (publishStatus?.status === 'Published') {
            setPubStatus(phPublishStatuses[1])
        } else {
            setPubStatus(phPublishStatuses[0])
        }
    }

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
                            icon={publishStatus ? HiEye : HiEyeOff}
                            labelText='Set publish status'
                            dataSource={phPublishStatuses}
                            property='status'
                            selectedValue={publishStatus}
                            setSelectedValue={handlePowerHourPublishStatus}
                        />
                    </Grid3Column>
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