import {
    DashPageLayout,
    SEO
} from '@/components/common'
import axios from 'axios'

const PowerHourDynamic = () => {

    return (
        <>
            <SEO />
            <DashPageLayout>
                <section className="">

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

export const getStaticProps = async (context: any) => {
    console.log(context)

    return {
        props: {}
    }
}

export default PowerHourDynamic