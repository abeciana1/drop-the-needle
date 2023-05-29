import {
    SEO,
    DashPageLayout,
    ComponentMargin
} from '@/components/common'
import { H1 } from '@/components/styled'

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

export default ParticipantPowerHoursPage