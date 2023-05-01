import { ChildrenI, WavySectionI } from "@/interfaces"

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

export const WavySectionA = ({
    color
}: WavySectionI) => {

    return (
        <section>
            <svg viewBox="0 0 1185 248" xmlns="http://www.w3.org/2000/svg">
                <path d="M1134.5 48.2C1022.1 48.2 1047 97.2 945.8 107.5C844.6 117.8 799.1 69.2 726.3 69.2C653.5 69.2 618.4 91.1 515.5 138.5C412.7 185.8 241.5 147.2 90.7 69.2C53 49.7 22.7 32.5 0 17.7V248H1185V55C1170 50.8 1153.4 48.2 1134.5 48.2ZM76 141.1C65 141.1 56 132.1 56 121.1C56 110.1 65 101.1 76 101.1C87 101.1 96 110.1 96 121.1C96 132.1 87 141.1 76 141.1ZM814.5 190.1C801 190.1 790 179.1 790 165.6C790 152.1 801 141.1 814.5 141.1C828 141.1 839 152.1 839 165.6C839 179.1 828 190.1 814.5 190.1ZM870 212.1C863.9 212.1 859 207.2 859 201.1C859 195 863.9 190.1 870 190.1C876.1 190.1 881 195 881 201.1C881 207.2 876.1 212.1 870 212.1Z" fill={color} />
            </svg>
        </section>
    )
}

export const WavySectionB = ({
    color
}: WavySectionI) => {

    return (
        <section>
            <svg viewBox="0 0 1185 248" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.5 199.8C162.9 199.8 138 150.8 239.2 140.5C340.4 130.2 385.9 178.8 458.7 178.8C531.5 178.8 566.6 156.9 669.5 109.5C772.3 62.2 943.5 100.8 1094.3 178.8C1132 198.3 1162.3 215.5 1185 230.3V0H0V193C15 197.2 31.6 199.8 50.5 199.8ZM1109 106.9C1120 106.9 1129 115.9 1129 126.9C1129 137.9 1120 146.9 1109 146.9C1098 146.9 1089 137.9 1089 126.9C1089 115.9 1098 106.9 1109 106.9ZM370.5 57.9C384 57.9 395 68.9 395 82.4C395 95.9 384 106.9 370.5 106.9C357 106.9 346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9ZM315 35.9C321.1 35.9 326 40.8 326 46.9C326 53 321.1 57.9 315 57.9C308.9 57.9 304 53 304 46.9C304 40.8 308.9 35.9 315 35.9Z" fill={color} />
            </svg>
        </section>
    )
}

