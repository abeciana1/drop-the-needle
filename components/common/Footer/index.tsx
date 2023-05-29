import Image from 'next/image'
import cx from 'classnames'
import { FooterI } from '@/interfaces'

const Footer = ({
    bgColor
}: FooterI) => {
    const date = new Date()
    let currentYear = date.getFullYear()

    return (
        <footer className={cx("pt-10 md:pt-20 flex justify-center items-center space-x-2 bg-inherit font-semiBold fixed w-full bottom-0", {
            ['bg-vermillion-200 text-altBlack']: bgColor === 'vermillion-200',
            ['bg-jaffa-200 text-altBlack']: bgColor === 'jaffa-200',
            ['bg-ceruleanBlue text-altWhite']: bgColor === 'ceruleanBlue',
            ['bg-altGreen-300 text-altWhite']: bgColor === 'altGreen-300'
        })}>
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