import { Fragment } from 'react'
import {
    SEO,
    PlaylistCard,
    ComponentMargin,
    WavySection,
    DashPageLayout
} from '@/components/common'
import { SideNav } from '@/components/account'
import axios from 'axios';
import { PlaylistCardI } from '@/interfaces';
import {
    H1,
    H2
} from '@/components/styled'

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
            <DashPageLayout>
                <ComponentMargin>
                    <H1 color={2} text={`Welcome back, ${name}`}/>
                </ComponentMargin>
                <WavySection color='jaffa-200' type={1} />
                <ComponentMargin bgColor='jaffa-200'>
                    <H2 color={0} text={'My Hosted Power Hours'} />
                    <section className='py-5 grid grid-cols-3'>
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
                <WavySection color='jaffa-200' type={2} bgColor='altGreen-300' />
                <ComponentMargin bgColor='altGreen-300'>
                    <H2 color={0} text={'Participation'} />
                    <section className='py-5 grid grid-cols-3'>
                        {participants.map(({powerHour}: PlaylistCardI) => (
                            <PlaylistCard
                                key={powerHour.id}
                                id={powerHour.id}
                                title={powerHour.title}
                                cover_image={powerHour.cover_image}
                            />
                        ))}
                    </section>
                </ComponentMargin>
                <WavySection color='altGreen-300' type={3} bgColor='vermillion-200' />
                <ComponentMargin bgColor='vermillion-200'>
                    <H2 text={'Invitations'} />
                </ComponentMargin>
            </DashPageLayout>
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