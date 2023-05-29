import {
    SEO,
    DashPageLayout,
    ComponentMargin,
    WavySection
} from '@/components/common'
import { H1 } from '@/components/styled'
import { NextPageContext } from 'next';
import axios from 'axios';
import { getSession } from 'next-auth/react'
import { PlaylistCardI } from '@/interfaces';

const ParticipantPowerHoursPage = ({
    powerHours
}: any) => {
    
    return(
        <>
            <SEO
                title='Participating Power Hours'
            />
            <DashPageLayout footerColor='vermillion-200'>
                <ComponentMargin>
                    <H1 color={0} text={'Participating Power Hours'} />
                </ComponentMargin>
                <WavySection color='jaffa-200' type={1} />
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

export default ParticipantPowerHoursPage