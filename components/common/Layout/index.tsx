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
    children,
    color1,
    color2
}: WavySectionI) => {

    return (
        <section className="section-a" data-current-color={color1} data-next-color={color2} >
            {children}
        </section>
    )
}