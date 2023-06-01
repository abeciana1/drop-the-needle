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