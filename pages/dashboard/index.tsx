import { Fragment } from 'react'
import { SEO } from '@/components/common'
import { SideNav } from '@/components/account'

const DashboardIdxPage = () => {

    return (
        <Fragment>
            <SEO
                title='Dashboard'
            />
            <SideNav/>
        </Fragment>
    )
}

export default DashboardIdxPage