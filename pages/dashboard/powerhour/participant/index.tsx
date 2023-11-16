import { useMemo } from 'react'
import {
    SEO,
    DashPageLayout,
    ComponentMargin,
    WavySection,
    PlaylistCard,
    PlaylistCardGroup
} from '@/components/common'
import { Input } from '@/components/account'
import { H1, H2 } from '@/components/styled'
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { getSession } from 'next-auth/react'
import {
    DashPowerHourI,
    PowerHourGroupI
} from '@/interfaces';
import { formatInTimeZone } from 'date-fns-tz'
import { useForm, useWatch } from "react-hook-form"
import requireAuthentication from '@/middleware/authMiddleware'

const ParticipantPowerHoursPage = ({
    powerHours
}: PowerHourGroupI) => {
    const {
        register,
        control
    } = useForm()
    const searchWatch = useWatch({
        control,
        name: 'searchInput',
        defaultValue: ''
    })

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
                <WavySection color='altWhite' bgColor='jaffa-200' type={2} />
                <ComponentMargin bgColor='jaffa-200'>
                    <H1 color={0} text={'Participating Power Hours'} />
                    <section className='py-3'>
                        <Input
                            hideLabel
                            label='Search...'
                            placeholder='Search...'
                            name='searchInput'
                            fieldRequired={false}
                            register={register}
                        />
                    </section>  
                    <>
                        {powerHours?.length > 0 &&
                            <>
                                <H2 color={0} text='Upcoming'/>
                                <PlaylistCardGroup>
                                    {upcomingPowerHours?.filter(({powerHour}: DashPowerHourI) => powerHour.title.toLowerCase().includes(searchWatch.toLowerCase()))?.map(({powerHour}: DashPowerHourI) => (
                                        <PlaylistCard
                                            key={powerHour.id}
                                            id={powerHour.id}
                                            title={powerHour.title}
                                            cover_image={powerHour.cover_image}
                                            date={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                            time={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'p zzz')}
                                            publicLink={false}
                                            hostedLink={false}
                                        />
                                    ))}
                                </PlaylistCardGroup>
                                <H2 color={0} text='Past'/>
                                <PlaylistCardGroup>
                                    {pastPowerHours?.filter(({powerHour}: DashPowerHourI) => powerHour.title.toLowerCase().includes(searchWatch.toLowerCase()))?.map(({powerHour}: DashPowerHourI) => (
                                        <PlaylistCard
                                            key={powerHour.id}
                                            id={powerHour.id}
                                            title={powerHour.title}
                                            cover_image={powerHour.cover_image}
                                            date={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'MM/dd/yyyy')}
                                            time={formatInTimeZone(new Date(powerHour?.date_time), Intl.DateTimeFormat().resolvedOptions().timeZone, 'p zzz')}
                                            publicLink={false}
                                            hostedLink={false}
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const authResult = await requireAuthentication(context)
    if (!authResult.authed) {
        return authResult
    }
    const session = await getSession(context);
    let {data} = await axios.post('http://localhost:3000/api/powerhour/get-participants', {
        params: session?.user?.email
    })
    return {
        props: {
            powerHours: data?.powerHours?.[0]?.participants
        }
    }
}

export default ParticipantPowerHoursPage