import { Fragment } from 'react'
import { SEO } from '@/components/common'
import { SideNav } from '@/components/account'
import { NextPageContext } from 'next';
import { getSession } from "next-auth/react"

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

export const getServerSideProps = async (context: NextPageContext) => {
    let session = await getSession(context)
    console.log('data', session)
    return {
        props: session
    }
}