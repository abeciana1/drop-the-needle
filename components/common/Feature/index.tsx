import { FeatureI } from "@/interfaces"

const Feature = ({
    title,
    body,
    icon
}: FeatureI) => {

    return (
        <div>
            <div>{icon}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    )
}

export default Feature