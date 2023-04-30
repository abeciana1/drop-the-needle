import React from 'react'
import Image from 'next/image'
import { HeroSectionI } from '@/interfaces'
import cx from 'classnames'

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
        <section className='relative mt-10'>
            <section className="flex flex-col md:flex-row lg:gap-10 items-center">
                <section className="basis-1/2 lg:basis-1/3 space-y-5">
                    <h1 className=' text-altBlack'>{heading}</h1>
                    <div className='text-2xl font-semiBold'>{bodyTagline}</div>
                </section>
                <section className="basis-1/2 lg:basis-2/3">
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