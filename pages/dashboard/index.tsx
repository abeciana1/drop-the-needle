import { Fragment } from 'react'
import { SEO } from '@/components/common'
import { SideNav } from '@/components/account'
import { NextPageContext } from 'next';
import { getSession } from "next-auth/react"

// todo create endpoint for user data mapping and gathering

const DashboardIdxPage = (props: any) => {

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

export const getServerSideProps = async (context: NextPageContext) => {
    let session = await getSession(context)

    return {
        props: {
            name: session?.user?.name,
            // hostedPowerHours: hostedPowerHours
        }
    }
}