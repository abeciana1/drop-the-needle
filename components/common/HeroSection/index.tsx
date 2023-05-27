import React from 'react'
import Image from 'next/image'
import { HeroSectionI } from '@/interfaces'
import {
    LinkLookLikeButton,
} from '@/components/common'
import { H1 } from '@/components/styled'

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
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center">
            <section className="space-y-5">
                <H1 color={2} text={heading} />
                <div className='text-altBlack text-2xl font-semiBold'>{bodyTagline}</div>
                {ctaButton &&
                    <div>
                        <LinkLookLikeButton
                            text={ctaText}
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
                    priority
                />
            </section>
        </section>
    )
}