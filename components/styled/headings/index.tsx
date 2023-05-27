import { StyledHeadingI } from '@/interfaces'
import cx from 'classnames'
import { colors } from '@/components/styled'


export const H1 = ({
    text,
    color = 0
}: StyledHeadingI) => {
    <h1
        className={cx('text-5xl lg:text-6xl font-bold', {
            [colors[color]]: colors[color] && color,
        })}
    >{text}</h1>
}