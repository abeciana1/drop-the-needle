import { ChildrenI } from "@/interfaces"

export const Grid2Col = ({
    children
}: ChildrenI) => {

    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2"
        >
            {children}
        </section>
    )
}