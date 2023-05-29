import { Fragment } from 'react'
import {
    SEO,
    PlaylistCard,
    ComponentMargin,
    WavySection,
    DashPageLayout,
    LinkLookLikeButton
} from '@/components/common'
import axios from 'axios';
import { PlaylistCardI } from '@/interfaces';
import {
    H1,
    H2
} from '@/components/styled'
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react'


const DashboardIdxPage = ({user}: any) => {
    const {
        name,
        hosted,
        participants
    } = user
    return (
        <Fragment>
            <SEO
                title='Dashboard'
            />
            <DashPageLayout footerColor='vermillion-200'>
                <ComponentMargin>
                    <H1 color={2} text={`Welcome back, ${name}`}/>
                </ComponentMargin>
                <WavySection color='jaffa-200' type={1} />
                <ComponentMargin bgColor='jaffa-200'>
                    <H2 color={0} text={'My Hosted Power Hours'} />
                    <section className='py-5 grid grid-cols-3'>
                        {hosted?.map(({powerHour}: PlaylistCardI) => (
                            <PlaylistCard
                                key={powerHour.id}
                                id={powerHour.id}
                                title={powerHour.title}
                                cover_image={powerHour.cover_image}
                            />
                        ))}
                    </section>
                    <div className='ml-10'>
                        <LinkLookLikeButton
                            href='dashboard/powerhour'
                            text='View more'
                            bgColor='altBlack'
                            ctaArrow={true}
                        />
                    </div>
                </ComponentMargin>
                <WavySection color='jaffa-200' type={2} bgColor='ceruleanBlue' />
                <ComponentMargin bgColor='ceruleanBlue'>
                    <H2 color={0} text={'Participation'} />
                    <section className='py-5 grid grid-cols-3'>
                        {participants?.map(({powerHour}: PlaylistCardI) => (
                            <PlaylistCard
                                key={powerHour.id}
                                id={powerHour.id}
                                title={powerHour.title}
                                cover_image={powerHour.cover_image}
                            />
                        ))}
                    </section>
                    <div className='ml-10'>
                        <LinkLookLikeButton
                            href='dashboard/powerhour'
                            text='View more'
                            bgColor='gold'
                            ctaArrow={true}
                        />
                    </div>
                </ComponentMargin>
                <WavySection color='ceruleanBlue' type={3} bgColor='vermillion-200' />
                <ComponentMargin bgColor='vermillion-200'>
                    <H2 text={'Invitations'} />
                </ComponentMargin>
            </DashPageLayout>
        </Fragment>
    )
}

export default DashboardIdxPage

export const getServerSideProps = async (context: NextPageContext) => {
    const session = await getSession(context);
    let {data} = await axios.post('http://localhost:3000/api/user/get-dashboard', {
        params: session?.user?.email
    })
    return {
        props: {
            user: data?.user
        }
    }
}
