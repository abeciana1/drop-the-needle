import { ImageResponse } from '@vercel/og'

export const config = {
    runtime: 'edge',
}

const handle = async () => {
    return new ImageResponse((
        <div tw="flex w-full h-full items-center justify-around text-[#343434] bg-[#f8f8f8]">
            <div tw="flex w-full py-12 px-4 md:items-center justify-around p-8">
                <img
                    height="500"
                    width="500"
                    className="w-60 h-60" 
                    src='https://media.graphassets.com/output=format:jpg/sAXwEDXIQL6wFUjWWyJ1' 
                    alt='Drop The Needle'
                />
            </div>
        </div>
    ))
}

export default handle