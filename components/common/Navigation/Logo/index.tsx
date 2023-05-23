import Link from "next/link"
import Image from "next/image"

const LogoLink = () => {

    return (
        <Link
        href='/'
        title='Navigate to homepage'
        >
            <Image
                src='/drop-the-needle-logo.webp'
                height={70}
                width={70}
                alt='Drop The Needle logo'
                priority
                className='mx-auto bg-altWhite rounded-full'
            />
        </Link>
    )
}

export default LogoLink