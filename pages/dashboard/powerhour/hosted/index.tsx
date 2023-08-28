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

const HostedPowerHoursPage = ({
    powerHours
}: PowerHourGroupI) => {

    return(
        <>
            <SEO
                title='Hosted Power Hours'
            />
            <DashPageLayout>
                <ComponentMargin>
                    <H1 color={0} text={'Hosted Power Hours'} />
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
                                        publicLink={false}
                                    />
                                ))}
                            </PlaylistCardGroup>
                        }
                    </>
                </ComponentMargin>
                <WavySection color='jaffa-200' type={2} />
            </DashPageLayout>
        </>
    )
}

export const getServerSideProps = async (context: NextPageContext) => {
    const session = await getSession(context);
    let {data} = await axios.post('http://localhost:3000/api/powerhour/get-hosted', {
        params: session?.user?.email
    })

    return {
        props: {
            powerHours: data?.powerHours
        }
    }
}

export default HostedPowerHoursPage