import { Fragment } from 'react'
import {
    SEO,
    PlaylistCard,
    ComponentMargin,
    WavySection
} from '@/components/common'
import { SideNav } from '@/components/account'
import axios from 'axios';
import { PlaylistCardI } from '@/interfaces';

const DashboardIdxPage = ({data}: any) => {
    console.log(data)
    const {
        name,
        hosted,
        participants
    } = data
    return (
        <Fragment>
            <SEO
                title='Dashboard'
            />
            <section className='flex flex-row'>
                <SideNav/>
                <main className='w-full'>
                    <ComponentMargin>
                        <h1 className='text-altBlack'>Welcome back, {name}</h1>
                    </ComponentMargin>
                    <WavySection color='jaffa-200' type={1} />
                    <ComponentMargin bgColor='jaffa-200'>
                        <h2>My Power Hours</h2>
                        <section className='py-5'>
                            {hosted.map(({powerHour}: PlaylistCardI) => (
                                <PlaylistCard
                                    key={powerHour.id}
                                    id={powerHour.id}
                                    title={powerHour.title}
                                    cover_image={powerHour.cover_image}
                                />
                            ))}
                        </section>
                    </ComponentMargin>
                </main>
            </section>
            
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