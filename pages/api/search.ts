import { youtube } from 'scrape-youtube';
import type { NextApiRequest, NextApiResponse } from 'next';
import { runMiddleware } from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res);
    if (req.method === 'POST') {
        const { videos } = await youtube.search(req?.body?.searchTerm, {
            type: 'videos'
        })
        res.status(200).json({ videos })
    }
}

export default handler