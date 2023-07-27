import { FormI } from "@/interfaces"

const FormContainer = ({
    children,
    onSubmit
}: FormI) => {

    return (
        <form
            className="w-56 sm:w-96"
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default FormContainer