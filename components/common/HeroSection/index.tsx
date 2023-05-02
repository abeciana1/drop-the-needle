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
        <section className='relative my-10'>
            <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center">
                <section className="space-y-5">
                    <h1 className=' text-altBlack'>{heading}</h1>
                    <div className='text-2xl font-semiBold'>{bodyTagline}</div>
                </section>
                <section className="mt-5 lg:mt-0">
                    <Image
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                    />
                </section>
            </section>
        </section>
    )
}