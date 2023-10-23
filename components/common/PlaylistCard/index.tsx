import { DashPowerHourType } from "@/types" 
import Link from 'next/link'
import Image from 'next/image'
import { set } from 'lodash'

const PlaylistCard = ({
    id,
    title,
    cover_image,
    publicLink = false,
    date_time
}: DashPowerHourType) => {
    return (
        <Link
            href={`/${publicLink ? 'listen' : 'dashboard'}/powerhour/${encodeURI(id.toString())}`}
            title={title}
            className="text-xl  font-semiBold"
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
            <div className='text-center'>{date_time}</div>
        </Link>
    )
}

export default PlaylistCard