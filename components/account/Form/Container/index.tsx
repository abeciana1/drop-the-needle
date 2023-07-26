import { ChildrenI } from "@/interfaces"

const FormContainer = ({
    children
}: ChildrenI) => {

    return (
        <form>
            {children}
        </form>
    )
}

export default FormContainer