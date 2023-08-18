import { FormI } from "@/interfaces"
import { useState } from 'react'

const FormContainer = ({
    children,
    onSubmit
}: FormI) => {


    return (
        <form
            noValidate
            className="sm:w-96"
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default FormContainer