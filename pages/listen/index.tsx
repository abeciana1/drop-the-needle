import { Fragment } from 'react'
import { GetServerSidePropsContext } from 'next';
import {
    SEO,
    ComponentMargin,
    WavySection,
    CommonPageLayout
} from '@/components/common'

const ListenIdx = () => {
    
    return(
        <Fragment>
            <SEO
                title='All Power Hours'
                description='Relive past power hours.'
            />
            <CommonPageLayout footerColor='vermillion-200'>
                <ComponentMargin>

                </ComponentMargin>
                <WavySection color='ceruleanBlue' type={3} bgColor='vermillion-200' />
            </CommonPageLayout>
        </Fragment>
    )
}

export default ListenIdx

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {}
    }
}