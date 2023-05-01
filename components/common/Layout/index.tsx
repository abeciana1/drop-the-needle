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

    // <section className="section-a section-bubble" data-current-color={color1} data-next-color={color2} >
    //     {children}
    // </section>
    return (
        <section className="wavy-container pb-32">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className="wavy">
            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none', fill:'red'}}></path>
        </svg>
        </section>
    )
}