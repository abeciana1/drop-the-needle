import React from 'react'
import Image from 'next/image'
import { HeroSectionI } from '@/interfaces'

export const HeroSectionBlendImage = ({
    heading,
    bodyTagline,
    image
}: HeroSectionI) => {

    const { 
        src,
        width,
        height,
        alt
    } = image

    return (
        <section className="">
            <section>
                <h1>{heading}</h1>
                <div>{bodyTagline}</div>
            </section>
            <section>
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                />
            </section>
        </section>
    )
}