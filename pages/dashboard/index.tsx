import { Fragment } from 'react'
import { SEO } from '@/components/common'
import { SideNav } from '@/components/account'
import { NextPageContext } from 'next';
import { getSession } from "next-auth/react"
import axios from 'axios';

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

export const getStaticProps = async (params: any) => {
    // let session = await getSession(params)
    // let data = await axios.get('http://localhost:3000/api/user/get-user', {
    //     params: {
    //         email: session?.user?.email
    //     }
    // })
    // console.log('session', params)
    return {
        props: {
            // name: session?.user?.name as string,
            // hostedPowerHours: hostedPowerHours
        }
    }
}