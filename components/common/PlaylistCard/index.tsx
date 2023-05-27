import { DashPowerHourType } from "@/types" 
import Link from 'next/link'

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
            {title}
        </Link>
    )
}

export default PlaylistCard