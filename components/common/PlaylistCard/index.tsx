import { DashPowerHourType } from "@/types" 
import Link from 'next/link'
import Image from 'next/image'

const PlaylistCard = ({
    id,
    title,
    cover_image
}: DashPowerHourType) => {

    return (
        <Link
            href={`/dashboard/powerhour/${encodeURI(id.toString())}`}
            className=""
            title={title}
        >
            <Image
                src={cover_image}
                priority
                className=""
                title={title}
                width={100}
                height={100}
            />
            {title}
        </Link>
    )
}

export default PlaylistCard