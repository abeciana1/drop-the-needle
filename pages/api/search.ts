import { youtube } from 'scrape-youtube';
// import * as yt from 'youtube-search-without-api-key';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { videos } = await youtube.search(req?.body?.searchTerm, {
            type: 'videos'
        })
        res.status(200).json({ videos })
    }
}

export default handler