import React from 'react'
import Link from 'next/link'
import { LinkButtonI } from '@/interfaces'
import cx from 'classnames'
import { FaArrowRight } from 'react-icons/fa'

export const LinkLookLikeButton = ({
    href,
    text,
    bgColor = 'altBlack',
    ctaArrow
}: LinkButtonI) => {

    return (
        <Link
            href={`/${href}`}
            className={cx('flex flex-row w-fit items-center text-2xl font-medium px-3 py-1 rounded-lg', {
                ['text-altWhite bg-altBlack']: bgColor === 'altBlack',
                ['text-altBlack bg-altWhite']: bgColor === 'altWhite',
                ['text-altWhite bg-vermillion']: bgColor === 'vermillion',
                ['text-altBlack bg-gold']: bgColor === 'gold',
                ['text-altWhite bg-ceruleanBlue']: bgColor === 'blue'
            })}
        >
            {text}
            {ctaArrow &&
                <span>
                    <FaArrowRight title='cta-right-arrow' className='ml-2' />
                </span>
            }
        </Link>
    )
}