import {
    DashPageLayout,
    SEO,
    ComponentMargin
} from '@/components/common'
import axios from 'axios'
import { PowerHourDynamicPageI } from '@/interfaces'
import Image from 'next/image'

const PowerHourDynamic = ({ powerHour }: PowerHourDynamicPageI) => {
    console.log({powerHour})
    const {
    //     id,
        title,
    //     description,
        cover_image,
    //     date_time,
    //     createdAt,
    //     privateStatus,
    //     publishStatus,
    //     participants,
    //     PowerHourSongs
    } = powerHour

    return (
        <>
            <SEO />
            <DashPageLayout>
                <section className="">
                    <Image
                        src={cover_image}
                        width={150}
                        height={150}
                        alt={title}
                    />
                </section>
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
    const {data } = await axios.get("http://localhost:3000/api/powerhour/" + params?.id)
    console.log(data)
    return {
        props: {
            powerHour: data?.powerHour
        }
    }
}

export default PowerHourDynamic