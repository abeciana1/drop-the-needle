import { StyledHeadingI } from '@/interfaces'
import cx from 'classnames'
import { colors } from '@/components/styled'


export const H1 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h1
            className={cx('text-5xl lg:text-6xl font-bold', {
                [colors[color]]: colors[color],
            })}
        >{text}</h1>
    )
}

export const h2 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h2
            className={cx('text-4xl lg:text-5xl font-bold', {
                [colors[color]]: colors[color],
            })}
        >
            {text}
        </h2>
    )
}

export const h3 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    return (
        <h3
            className={cx('text-4xl lg:text-5xl font-bold', {
                [colors[color]]: colors[color],
            })}
        >
            {text}
        </h3>
    )
}

