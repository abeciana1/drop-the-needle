import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('req', req)
    if (req.method === 'POST') {
        let newTrack = await prisma.powerHourSong.create({
            data: req.body
        })
        console.log('newTrack', newTrack)
        res.status(200).json({ newTrack })
    }
}

export default handler