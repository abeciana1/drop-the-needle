import React from 'react'
import { FeatureI } from "@/interfaces"
import cx from 'classnames'

const Feature = ({
    title,
    body,
    icon,
    color = 'altBlack'
}: FeatureI) => {

    const Icon = icon as React.ElementType

    return (
        <div className="flex items-center">
            <Icon size={'4rem'} className={cx('',{
                ['fill-altWhite']: color === 'altWhite'
            })} />
            <div className={cx("flex flex-col ml-12", {
                ['text-altBlack']: color === 'altBlack',
                ['text-altWhite']: color === 'altWhite'
            })}>
                <div className="font-semiBold">{title}</div>
                <div className="text-lg">{body}</div>
            </div>
        </div>
    )
}

export default Feature