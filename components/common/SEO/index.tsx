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
            openGraph={{
                type: 'website',
                title: title,
                description: description,
                images: [
                    {
                        url: 'https://drop-the-needle.vercel.app/api/og',
                        width: 800,
                        height: 600,
                        alt: 'Drop The Needle'
                    }
                ]
            }}
        />
    )
}

export default SEO