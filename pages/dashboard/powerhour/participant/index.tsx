import {
    SEO,
    DashPageLayout,
    ComponentMargin,
    WavySection,
    PlaylistCard,
    PlaylistCardGroup
} from '@/components/common'
import { H1 } from '@/components/styled'
import { NextPageContext } from 'next';
import axios from 'axios';
import { getSession } from 'next-auth/react'
import {
    DashPowerHourI,
    PowerHourGroupI
} from '@/interfaces';

const ParticipantPowerHoursPage = ({
    powerHours
}: PowerHourGroupI) => {
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
                            <PlaylistCardGroup>
                                {powerHours?.map(({powerHour}: DashPowerHourI) => (
                                    <PlaylistCard
                                        key={powerHour.id}
                                        id={powerHour.id}
                                        title={powerHour.title}
                                        cover_image={powerHour.cover_image}
                                    />
                                ))}
                            </PlaylistCardGroup>
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
            powerHours: data?.powerHours
        }
    }
}

export default ParticipantPowerHoursPage