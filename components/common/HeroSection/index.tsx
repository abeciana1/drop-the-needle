import React from 'react'
import Image from 'next/image'
import { HeroSectionI } from '@/interfaces'
import { LinkLookLikeButton } from '@/components/common'

export const HeroSectionBlendImage = ({
    heading,
    bodyTagline,
    image,
    ctaButton,
    ctaColor = '',
    ctaText = '',
    ctaLink = ''
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
                    {ctaButton &&
                        <div>
                            <LinkLookLikeButton
                                linkText={ctaText}
                                bgColor={ctaColor}
                                href={ctaLink}
                                ctaArrow
                            />
                        </div>
                    }
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