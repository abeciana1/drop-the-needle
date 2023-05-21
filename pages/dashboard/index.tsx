import React from 'react'
import { SEO } from '@/components/common'
import { DrawerNav } from '@/components/account'

const DashboardIdxPage = () => {

    return (
        <React.Fragment>
            <SEO
                title='Dashboard'
            />
            <DrawerNav/>
        </React.Fragment>
    )
}

export default DashboardIdxPage