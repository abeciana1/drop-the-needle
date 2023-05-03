import Image from 'next/image'
    
const Footer = () => {
    const date = new Date()
    let currentYear = date.getFullYear()

    return (
        <footer className="pt-10 md:pt-20 flex justify-center space-x-2 bg-inherit font-semiBold">
            &#169;{currentYear}
            <a
            href="https://alexbeciana.com/"
            target="_blank"
            >
            <span className="flex items-center justify-center ml-1">
                Created by
                <Image
                    src="https://media.graphassets.com/output=format:webp/Bwz9zHRxS1S79v3Ppax0"
                    alt="AB Creative logo"
                    width={896}
                    height={570}
                    className="w-6 ml-1"
                />
            </span>
            </a>
        </footer>
    )
}

export default Footer