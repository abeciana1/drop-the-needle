import { Fragment } from 'react'
import { SEO } from '@/components/common'
import { DrawerNav } from '@/components/account'

const DashboardIdxPage = () => {

    return (
        <Fragment>
            <SEO
                title='Dashboard'
            />
            <DrawerNav/>
        </Fragment>
    )
}

export default DashboardIdxPage