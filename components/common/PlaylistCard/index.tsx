import { DashPowerHourType } from "@/types" 
import Link from 'next/link'
import Image from 'next/image'
import { set } from 'lodash'

const PlaylistCard = ({
    id,
    title,
    cover_image,
    publicLink = false,
    date,
    time,
    hostedLink = false
}: DashPowerHourType) => {
    let href = `/${publicLink ? 'listen' : 'dashboard'}/powerhour/${publicLink ? '' : 'participant/'}${encodeURI(id.toString())}`
    let hostedHref = `/dashboard/powerhour/hosted/${encodeURI(id.toString())}`

    return (
        <Link
            href={hostedLink ? hostedHref : href}
            title={title}
            className="text-xl font-semiBold"
        >
            <Image
                src={cover_image}
                priority
                alt={title}
                width={225}
                height={225}
                className='w-56 h-56 mx-auto'
            />
            <div className='text-center'>
                {title}
            </div>
            <div className='text-center'>{date}</div>
            <div className='text-center'>{time}</div>
        </Link>
    )
}

export default PlaylistCard