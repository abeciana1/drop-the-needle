import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const trackId = Number(req?.query?.id)
    if (req.method === 'PATCH') {
        let track = await prisma?.powerHourSong?.update({
            where: {
                id: trackId
            },
            data: req.body
        })
        res.status(200).json({ track })
    } else if (req.method === 'DELETE') {
        let track = await prisma.powerHourSong.delete({
            where: {
                id: trackId
            }
        })
        res.status(200).json({ track })
    }
}

export default handler