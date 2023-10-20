import { DashPowerHourType } from "@/types" 
import Link from 'next/link'
import Image from 'next/image'

const PlaylistCard = ({
    id,
    title,
    cover_image,
    publicLink = false
}: DashPowerHourType) => {

    return (
        <Link
            href={`/${publicLink ? 'listen' : 'dashboard'}/powerhour/${encodeURI(id.toString())}`}
            title={title}
            className="text-xl mx-auto text-center font-semiBold"
        >
            <Image
                src={cover_image}
                priority
                alt={title}
                width={225}
                height={225}
                className='w-56 h-56'
            />
            {title}
        </Link>
    )
}

export default PlaylistCard