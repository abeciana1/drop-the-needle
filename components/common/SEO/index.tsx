import { NextSeo } from "next-seo"
import { SeoI } from "@/interfaces"
// import { useRouter } from "next/router"

const SEO = ({
    title = '',
    description = '',
    noIndex = false,
    noFollow = false,
}: SeoI) => {
    // const router = useRouter()

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
                        url: 'http://localhost:3000/api/og',
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