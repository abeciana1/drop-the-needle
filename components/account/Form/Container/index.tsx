import { FormI } from "@/interfaces"

const FormContainer = ({
    children,
    onSubmit
}: FormI) => {

    return (
        <form
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default FormContainer