import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let userSongs = await prisma.participant.findFirst({
            where: {
                powerHourId: req?.body?.phId,
                userId: req?.body?.userId
            },
            select: {
                PowerHourSongs: {
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        })
        res.status(200).json({ userSongs })
    }
}

export default handler