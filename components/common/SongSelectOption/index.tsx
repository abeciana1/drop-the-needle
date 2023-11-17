import { SongSelectOptionI } from '@/interfaces'
import cx from 'classnames'

const SongSelectOption = ({
    title,
    artist,
    idx,
    participant,
    currentIdx,
    songJumpHandler
}: SongSelectOptionI) => {

    return(
        <li
            onClick={() => songJumpHandler(idx)}
            className={cx('cursor-pointer relative pt-5 flex flex-col justify-center mx-auto w-72 p-3 rounded-lg', {
            ['bg-green-400']: idx === currentIdx
        })}>
            <div className='flex items-center justify-between'>
                <span className='font-bold'>&quot;{title}&quot;</span>
                <span> — </span>
                <span className='italic'>{artist}</span>
            </div>
            <div>Contributed by {participant}</div>
        </li>
    )
}

export default SongSelectOption