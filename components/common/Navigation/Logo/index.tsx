import Link from "next/link"
import Image from "next/image"
import { NavLogoLinkI } from "@/interfaces"

const LogoLink = ({
    size
}: NavLogoLinkI) => {

    return (
        <Link
        href='/'
        title='Navigate to homepage'
        >
            <Image
                src='/drop-the-needle-logo.webp'
                width={size}
                height={size}
                alt='Drop The Needle logo'
                priority
                className='mx-auto bg-altWhite rounded-full'
            />
        </Link>
    )
}

export default LogoLink