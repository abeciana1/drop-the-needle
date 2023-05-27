import { Fragment } from 'react'
import {
    SEO,
    PlaylistCard
} from '@/components/common'
import { SideNav } from '@/components/account'
import axios from 'axios';

// todo create endpoint for user data mapping and gathering

const DashboardIdxPage = ({data}: any) => {
    console.log(data)
    return (
        <Fragment>
            <SEO
                title='Dashboard'
            />
            <SideNav/>
        </Fragment>
    )
}

export default DashboardIdxPage

// export const getStaticPaths = async () => {
//     let { data } = await axios.get('http://localhost:3000/api/user/get-dashboard')
//     let hostedPaths = data?.user?.hosted.map((hosted: any) => {
//         return hosted?.powerHour?.id
//     })
//     let participantPaths = data?.user?.participants.map((participant: any) => {
//         return participant?.powerHour?.id
//     })
//     const paths = hostedPaths.concat(participantPaths)
//     return {
//         paths,
//         fallback: true
//     }
// }

export const getStaticProps = async () => {
    let { data } = await axios.get('http://localhost:3000/api/user/get-dashboard')
    return {
        props: {
            data: data?.user
        }
    }
}