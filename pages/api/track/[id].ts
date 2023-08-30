import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'PATCH') {
        let trackId = Number(req?.query?.id)
        let track = await prisma?.powerHourSong?.update({
            where: {
                id: trackId
            },
            data: req.body
        })
        res.status(200).json({ track })
    }
}

export default handler