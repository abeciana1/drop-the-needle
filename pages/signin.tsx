import React from 'react'
import {
    NavBar, 
    SEO,
    WavySection,
    ComponentMargin,
    Grid2Column
} from '@/components/common'
import Image from 'next/image'

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
            <WavySection type={4} bgColor='altWhite' color='vermillion-200' />
            <ComponentMargin bgColor='vermillion-200'>
                <Grid2Column>
                    <Image
                        src='/music-phone.webp'
                        width={633}
                        height={714}
                        alt='Signin'
                    />
                </Grid2Column>
            </ComponentMargin>
            </main>
        </React.Fragment>
    )
}

export default SigninPage