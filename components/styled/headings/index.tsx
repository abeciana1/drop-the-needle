import { StyledHeadingI } from '@/interfaces'
import cx from 'classnames'
import { colors } from '@/components/styled'


export const H1 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h1
            className={cx('text-5xl lg:text-6xl font-bold py-1', {
                [colors[color]]: colors[color],
            })}
        >{text}</h1>
    )
}

export const H2 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h2
            className={cx('text-4xl lg:text-5xl font-bold py-1', {
                [colors[color]]: colors[color],
            })}
        >
            {text}
        </h2>
    )
}

export const H3 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h3
            className={cx('text-3xl lg:text-4xl font-bold py-1', {
                [colors[color]]: colors[color],
            })}
        >
            {text}
        </h3>
    )
}

export const H4 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h4
            className={cx('text-2xl lg:text-3xl font-bold', {
                [colors[color]]: colors[color],
            })}
        >
            {text}
        </h4>
    )
}

export const H5 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h5
            className={cx('text-xl lg:text-2xl font-bold', {
                [colors[color]]: colors[color],
            })}
        >
            {text}
        </h5>
    )
}

export const H6 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h6
            className={cx('text-lg lg:text-xl font-bold', {
                [colors[color]]: colors[color],
            })}
        >
            {text}
        </h6>
    )
}