import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'PATCH') {
        let track = await prisma?.powerHourSong?.update({
            where: {
                id: Number(req?.query?.id)
            },
            data: req.body
        })
        res.status(200).json({ track })
    } else if (req.method === 'DELETE') {
        let track = await prisma.powerHourSong.delete({
            where: {
                id: Number(req?.query?.id)
            }
        })
        res.status(200).json({ track })
    }
}

export default handler