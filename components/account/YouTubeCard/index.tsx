import { YouTubeCardI } from '@/interfaces'
import Image from 'next/image'
import { ExpandBtn } from '@/components/common'
import { AiFillPlayCircle, AiOutlinePlus } from 'react-icons/ai'
import { useAppDispatch } from '@/redux/hooks'
import { setInstance } from '@/redux/slices/instanceSlice'

interface DurationBoxI {
    duration: string;
}

const DurationBox = ({duration}: DurationBoxI) => {
    return (
        <div className='absolute bottom-0 right-0 px-1.5 py-0.5 text-altWhite font-semiBold bg-altBlack rounded-lg text-lg'>
            { duration }
        </div>
    )
}

const YouTubeCard = ({
    id,
    title,
    link,
    thumbnail,
    description,
    durationString,
    mappedPowerHours,
    userPowerHours
}: YouTubeCardI) => {
    const dispatch = useAppDispatch()

    const renderVideoModal = () => {
        dispatch(setInstance({
            display: true,
            name: 'videoModal',
            data: {
                link: `https://www.youtube.com/watch?v=${id}`,
                startTime: '0:00',
                endTime: durationString
            }
        }))
    }

    const renderVideoAddModal = () => {
        if (mappedPowerHours.length < 1) {
            dispatch(setInstance({
                display: true,
                name: 'disclaimer',
                data: {
                    message: 'Sorry you\'re not participating in any power hours at the moment. Please remember to RSVP to any pending invitations you may have.'
                }
            }))
        } else {
            dispatch(setInstance({
                display: true,
                name: 'vidSongAdd', 
                data: {
                    youTubeLink: `https://www.youtube.com/watch?v=${id}`,
                    mappedPowerHours: mappedPowerHours,
                    userPowerHours: userPowerHours
                }
            }))
        }
    }

    return(
        <>
            <div className='flex max-w-4xl mb-10 items-center'>
                <div className='relative'>
                    <Image
                        src={thumbnail}
                        alt={`${title} YouTube video`}
                        width={480}
                        height={270}
                        className='rounded-xl max-w-[12rem] h-40'
                    />
                    <DurationBox duration={durationString} />
                </div>
                <div className='leading-normal ml-10'>
                    <a href={link} title={title} className='text-xl font-medium hover:underline hover:underline-offset-4'>{ title }</a>
                    <div className='text-md'>{ description }</div>
                    <div className='pt-2 flex flex-row gap-2.5'>
                        <ExpandBtn
                            size={10}
                            text='Watch video'
                            backgroundColor='ceruleanBlue'
                            icon={AiFillPlayCircle}
                            onClick={renderVideoModal}
                        />
                        <ExpandBtn
                            size={14}
                            text='Add to a power hour'
                            backgroundColor='bg-green-400'
                            icon={AiOutlinePlus}
                            onClick={renderVideoAddModal}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default YouTubeCard