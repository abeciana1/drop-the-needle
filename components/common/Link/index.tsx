import React from 'react'
import Link from 'next/link'
import {
    LinkButtonI,
    LinkOnClickEvent
} from '@/interfaces'
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
                ['text-altBlack bg-gold']: bgColor === 'gold'
            })}
        >
            {text}
            {ctaArrow &&
                <span>
                    <FaArrowRight className='ml-2' />
                </span>
            }
        </Link>
    )
}

export const LinkLookLikeButtonEvent = ({
    text,
    ctaArrow,
    bgColor,
    href,
    onClick
}: LinkOnClickEvent) => {



    return (
        <Link
            onClick={(e: any) => onClick(e)}
            href={`/${href}`}
            className={cx('flex flex-row w-fit items-center text-2xl font-medium px-3 py-1 rounded-lg', {
                ['text-altWhite bg-altBlack']: bgColor === 'altBlack',
                ['text-altBlack bg-altWhite']: bgColor === 'altWhite',
                ['text-altWhite bg-vermillion']: bgColor === 'vermillion',
                ['text-altBlack bg-gold']: bgColor === 'gold'
            })}
        >
            {text}
            {ctaArrow &&
                <span>
                    <FaArrowRight className='ml-2' />
                </span>
            }
        </Link>
    )
}