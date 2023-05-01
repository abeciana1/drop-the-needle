import { ChildrenI } from "@/interfaces"

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