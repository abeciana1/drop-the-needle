import { NextSeo } from "next-seo"
import { SeoI } from "@/interfaces"

const SEO = ({
    title,
    description
}: SeoI) => {

    return (
        <NextSeo
            title={title}
            description={description}
        />
    )
}

export default SEO