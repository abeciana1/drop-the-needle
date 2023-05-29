import {
    ChildrenI,
    WavySectionI,
    ComponentMarginI,
    CommonPageLayoutI
} from "@/interfaces"
import cx from 'classnames'
import {
    NavBar,
    Footer
} from '@/components/common'
import { SideNav } from "@/components/account"

export const Grid2Column = ({
    children
}: ChildrenI) => {

    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20"
        >
            {children}
        </section>
    )
}

export const Grid3Column = ({
    children
}: ChildrenI) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20">
            {children}
        </section>
    )
}

export const WavySection = ({
    color,
    bgColor,
    type
}: WavySectionI ) => {

    return (
        <section className={cx({
            ['bg-vermillion-200']: bgColor === 'vermillion-200',
            ['bg-jaffa-200']: bgColor === 'jaffa-200',
            ['bg-ceruleanBlue']: bgColor === 'ceruleanBlue',
            ['bg-altGreen-300']: bgColor === 'altGreen-300'
        })}>
            <svg viewBox="0 0 1185 248" xmlns="http://www.w3.org/2000/svg" className={cx({
                ['fill-jaffa-200']: color === 'jaffa-200',
                ['fill-ceruleanBlue']: color === 'ceruleanBlue',
                ['fill-altWhite']: color === 'altWhite',
                ['fill-altBlack']: color === 'altBlack',
                ['fill-vermillion-200']: color === 'vermillion-200',
                ['fill-altGreen-300']: color === 'altGreen-300'
            })}>
            {type === 1 &&
                <path d="M1134.5 48.2C1022.1 48.2 1047 97.2 945.8 107.5C844.6 117.8 799.1 69.2 726.3 69.2C653.5 69.2 618.4 91.1 515.5 138.5C412.7 185.8 241.5 147.2 90.7 69.2C53 49.7 22.7 32.5 0 17.7V248H1185V55C1170 50.8 1153.4 48.2 1134.5 48.2ZM76 141.1C65 141.1 56 132.1 56 121.1C56 110.1 65 101.1 76 101.1C87 101.1 96 110.1 96 121.1C96 132.1 87 141.1 76 141.1ZM814.5 190.1C801 190.1 790 179.1 790 165.6C790 152.1 801 141.1 814.5 141.1C828 141.1 839 152.1 839 165.6C839 179.1 828 190.1 814.5 190.1ZM870 212.1C863.9 212.1 859 207.2 859 201.1C859 195 863.9 190.1 870 190.1C876.1 190.1 881 195 881 201.1C881 207.2 876.1 212.1 870 212.1Z" />
            }
            {type === 2 &&
                <path d="M50.5 199.8C162.9 199.8 138 150.8 239.2 140.5C340.4 130.2 385.9 178.8 458.7 178.8C531.5 178.8 566.6 156.9 669.5 109.5C772.3 62.2 943.5 100.8 1094.3 178.8C1132 198.3 1162.3 215.5 1185 230.3V0H0V193C15 197.2 31.6 199.8 50.5 199.8ZM1109 106.9C1120 106.9 1129 115.9 1129 126.9C1129 137.9 1120 146.9 1109 146.9C1098 146.9 1089 137.9 1089 126.9C1089 115.9 1098 106.9 1109 106.9ZM370.5 57.9C384 57.9 395 68.9 395 82.4C395 95.9 384 106.9 370.5 106.9C357 106.9 346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9ZM315 35.9C321.1 35.9 326 40.8 326 46.9C326 53 321.1 57.9 315 57.9C308.9 57.9 304 53 304 46.9C304 40.8 308.9 35.9 315 35.9Z" />
            }
            {type === 3 &&
                <>
                    <path d="M76 141.1C87.0457 141.1 96 132.145 96 121.1C96 110.054 87.0457 101.1 76 101.1C64.9543 101.1 56 110.054 56 121.1C56 132.145 64.9543 141.1 76 141.1Z" />
                    <path d="M870 212.1C876.075 212.1 881 207.175 881 201.1C881 195.024 876.075 190.1 870 190.1C863.925 190.1 859 195.024 859 201.1C859 207.175 863.925 212.1 870 212.1Z" />
                    <path d="M814.5 190.1C828.031 190.1 839 179.131 839 165.6C839 152.069 828.031 141.1 814.5 141.1C800.969 141.1 790 152.069 790 165.6C790 179.131 800.969 190.1 814.5 190.1Z" />
                    <path d="M0 0V17.7C22.7 32.5 53 49.6 90.7 69.2C241.5 147.2 412.7 185.8 515.5 138.5C618.4 91.1 653.5 69.2 726.3 69.2C799.1 69.2 844.6 117.8 945.8 107.5C1047 97.2 1022.1 48.2 1134.5 48.2C1153.4 48.2 1170 50.8 1185 55V0H0Z" />
                </>
            }
            {type === 4 &&
                <>
                    <path d="M1109 106.9C1097.95 106.9 1089 115.855 1089 126.9C1089 137.946 1097.95 146.9 1109 146.9C1120.05 146.9 1129 137.946 1129 126.9C1129 115.855 1120.05 106.9 1109 106.9Z"/>
                    <path d="M315 35.9004C308.925 35.9004 304 40.8253 304 46.9004C304 52.9755 308.925 57.9004 315 57.9004C321.075 57.9004 326 52.9755 326 46.9004C326 40.8253 321.075 35.9004 315 35.9004Z"/>
                    <path d="M370.5 57.9004C356.969 57.9004 346 68.8694 346 82.4004C346 95.9314 356.969 106.9 370.5 106.9C384.031 106.9 395 95.9314 395 82.4004C395 68.8694 384.031 57.9004 370.5 57.9004Z"/>
                    <path d="M1185 248V230.3C1162.3 215.5 1132 198.4 1094.3 178.8C943.5 100.8 772.3 62.2 669.5 109.5C566.6 156.9 531.5 178.8 458.7 178.8C385.9 178.8 340.4 130.2 239.2 140.5C138 150.8 162.9 199.8 50.5 199.8C31.6 199.8 15 197.2 0 193V248H1185Z"/>
                </>
            }
            </svg>
        </section>
    )
}

export const ComponentMargin = ({
    children,
    bgColor = 'altWhite'
}: ComponentMarginI) => {

    return (
        <section className={cx('relative py-5 px-5 sm:px-10 lg:px-20', {
            ['bg-vermillion-200 text-altBlack']: bgColor === 'vermillion-200',
            ['bg-jaffa-200 text-altBlack']: bgColor === 'jaffa-200',
            ['bg-ceruleanBlue text-altWhite']: bgColor === 'ceruleanBlue',
            ['bg-altGreen-300 text-altWhite']: bgColor === 'altGreen-300'
        })}>
            {children}
        </section>
    )
}

export const CommonPageLayout = ({
    children,
    footerColor
}: CommonPageLayoutI ) => {
    return (
        <>
            <NavBar/>
            <main>
                {children}
            </main>
            <Footer bgColor={footerColor} />
        </>
    )
}

export const DashPageLayout = ({
    children,
    footerColor
}: CommonPageLayoutI) => {
    return (
        <>
            <SideNav/>
            <main className='pt-10'>
                {children}
            </main>
            <Footer bgColor={footerColor} />
        </>
    )
}