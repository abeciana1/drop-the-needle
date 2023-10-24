import { useMemo } from 'react'
import {
    SEO,
    DashPageLayout,
    ComponentMargin,
    WavySection,
    PlaylistCard,
    PlaylistCardGroup
} from '@/components/common'
import { H1, H2 } from '@/components/styled'
import { NextPageContext } from 'next';
import axios from 'axios';
import { getSession } from 'next-auth/react'
import {
    DashPowerHourI,
    PowerHourGroupI
} from '@/interfaces';
import { formatInTimeZone } from 'date-fns-tz'

const ParticipantPowerHoursPage = ({
    powerHours
}: PowerHourGroupI) => {
    const upcomingPowerHours = useMemo(() => {
        return powerHours.filter(({powerHour}: any) => new Date(powerHour.date_time).valueOf() - new Date().valueOf() > 0)
    }, [])
    const pastPowerHours = useMemo(() => {
        return powerHours.filter(({powerHour}: any) => new Date().valueOf() - new Date(powerHour.date_time).valueOf() > 0)
    }, [])
    return(
        <>
            <SEO
                title='Participating Power Hours'
            />
            <DashPageLayout>
                <ComponentMargin>
                    <section className='md:ml-10'>
                        <H1 color={0} text={'Participating Power Hours'} />
                    </section>
                </ComponentMargin>
                <WavySection color='jaffa-200' type={1} />
                <ComponentMargin bgColor='jaffa-200'>
                    <>
                        {powerHours?.length > 0 &&
                            <>
                                <H2 color={0} text='Upcoming'/>
                                <PlaylistCardGroup>
                                    {upcomingPowerHours?.map(({powerHour}: DashPowerHourI) => (
                                        <PlaylistCard
                                            key={powerHour.id}
                                            id={powerHour.id}
                                            title={powerHour.title}
                                            cover_image={powerHour.cover_image}
                                            date={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                            time={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'p zzz')}
                                            publicLink
                                        />
                                    ))}
                                </PlaylistCardGroup>
                                <H2 color={0} text='Past'/>
                                <PlaylistCardGroup>
                                    {pastPowerHours?.map(({powerHour}: DashPowerHourI) => (
                                        <PlaylistCard
                                            key={powerHour.id}
                                            id={powerHour.id}
                                            title={powerHour.title}
                                            cover_image={powerHour.cover_image}
                                            date={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                            time={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'p zzz')}
                                            publicLink
                                        />
                                    ))}
                                </PlaylistCardGroup>
                            </>
                        }
                    </>
                </ComponentMargin>
                <WavySection color='jaffa-200' type={2}/>
            </DashPageLayout>
        </>
    )
}

export const getServerSideProps = async (context: NextPageContext) => {
    const session = await getSession(context);
    let {data} = await axios.post('http://localhost:3000/api/powerhour/get-participants', {
        params: session?.user?.email
    })
    return {
        props: {
            powerHours: data?.powerHours?.participants
        }
    }
}

export default ParticipantPowerHoursPage