import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let newTrack = await prisma.powerHourSong.create({
            data: req.body
        })
        res.status(200).json({ newTrack })
    }
}

export default handler