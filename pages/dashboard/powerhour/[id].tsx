import {
    DashPageLayout,
    SEO,
    ComponentMargin,
} from '@/components/common'
import {
    H1,
    H2,
    H3
} from '@/components/styled'
import axios from 'axios'
import { PowerHourDynamicPageI } from '@/interfaces'
import Image from 'next/image'
import { format } from 'date-fns'

const PowerHourDynamic = ({ powerHour }: PowerHourDynamicPageI) => {
    console.log({powerHour})

    return (
        <>
            <SEO />
            <DashPageLayout>
            {powerHour &&
                <ComponentMargin>
                    <section className="flex justify-around">
                        <Image
                            src={powerHour?.cover_image}
                            width={250}
                            height={250}
                            alt={powerHour?.title}
                        />
                        <section className=''>
                            <H1 color={2} text={powerHour?.title} />
                            <H2 color={2} text={powerHour?.description} />
                            <H3 color={2} text={format(new Date(powerHour?.date_time), 'MM/dd/yyyy')}/>
                        </section>
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
            }
        }
    }
}

export default PowerHourDynamic