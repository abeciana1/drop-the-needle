import React from 'react'
import {
    NavBar, 
    SEO,
    WavySection,
    ComponentMargin
} from '@/components/common'

const SigninPage = () => {

    return (
        <React.Fragment>
            <SEO
                title='Signin'
                description='Sign into your account and start curating power hours.'
            />
            <NavBar />
            <main>
            <ComponentMargin>
                <h1 className='text-altBlack'>Signin</h1>
            </ComponentMargin>
            <WavySection color='altWhite' type={3} bgColor='vermillion-200' />
            <ComponentMargin bgColor='vermillion-200'>
            </ComponentMargin>
            </main>
        </React.Fragment>
    )
}

export default SigninPage