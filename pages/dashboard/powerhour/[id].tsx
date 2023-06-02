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

    return (
        <>
            <SEO />
            <DashPageLayout>
            {powerHour &&
                <ComponentMargin>
                    <section className="">
                        <Image
                            src={powerHour?.cover_image}
                            width={150}
                            height={150}
                            alt={powerHour?.title}
                        />
                    </section>
                </ComponentMargin>
            }
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
    return {
        props: {
            powerHour: data?.powerHour
        }
    }
}

export default PowerHourDynamic