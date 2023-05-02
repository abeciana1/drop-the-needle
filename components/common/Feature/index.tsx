import React from 'react'
import { FeatureI } from "@/interfaces"

const Feature = ({
    title,
    body,
    icon
}: FeatureI) => {

    const Icon = icon as React.ElementType

    return (
        <div className="flex items-center">
            <Icon size={'4rem'}/>
            <div className="flex flex-col ml-12">
                <div className="font-semiBold">{title}</div>
                <div className="text-lg">{body}</div>
            </div>
        </div>
    )
}

export default Feature