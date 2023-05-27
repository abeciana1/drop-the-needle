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
            title={title}
            className="text-lg mx-auto text-center font-medium"
        >
            <Image
                src={cover_image}
                priority
                className=""
                alt={title}
                width={200}
                height={100}
            />
            {title}
        </Link>
    )
}

export default PlaylistCard