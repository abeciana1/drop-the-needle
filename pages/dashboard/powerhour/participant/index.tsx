import {
    SEO,
    DashPageLayout,
    ComponentMargin
} from '@/components/common'
import { H1 } from '@/components/styled'
import { NextPageContext } from 'next';
import axios from 'axios';
import { getSession } from 'next-auth/react'

const ParticipantPowerHoursPage = () => {

    return(
        <>
            <SEO
                title='Hosted Power Hours'
            />
            <DashPageLayout footerColor='vermillion-200'>
                <ComponentMargin bgColor='jaffa-200'>
                    <H1 color={0} text={'My Hosted Power Hours'} />
                </ComponentMargin>
            </DashPageLayout>
        </>
    )
}

export const getServerSideProps = async (context: NextPageContext) => {
    const session = await getSession(context);
    let {data} = await axios.post('http://localhost:3000/api/user/get-dashboard', {
        params: session?.user?.email
    })
    return {
        props: {}
    }
}

export default ParticipantPowerHoursPage