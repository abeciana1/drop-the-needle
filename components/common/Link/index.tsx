import React from 'react'
import Link from 'next/link'
import { LinkButtonI } from '@/interfaces'
import cx from 'classnames'

export const LinkLookLikeButton = ({
    href,
    linkText,
    bgColor = 'altBlack'
}: LinkButtonI) => {

    return (
        <Link
            href={`/${encodeURIComponent(href)}`}
            className={cx('text-2xl font-medium px-3 py-1 rounded-lg', {
                ['text-altWhite bg-altBlack']: bgColor === 'altBlack',
                ['text-altBlack bg-altWhite']: bgColor === 'altWhite',
                ['text-altWhite bg-vermillion']: bgColor === 'vermillion'

            })}
        >
            {linkText}
        </Link>
    )
}