import React from 'react'
import {
    NavBar, 
    SEO
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
                <h1>Signin</h1>
            </main>
        </React.Fragment>
    )
}

export default SigninPage