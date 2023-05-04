import { NextSeo } from "next-seo"
import { SeoI } from "@/interfaces"

const SEO = ({
    title = '',
    description = '',
    noIndex = false,
    noFollow = false,
}: SeoI) => {

    return (
        <NextSeo
            title={title}
            titleTemplate='Drop The Needle | %s'
            defaultTitle='Drop The Needle'
            description={description}
            noindex={noIndex}
            nofollow={noFollow}
        />
    )
}

export default SEO