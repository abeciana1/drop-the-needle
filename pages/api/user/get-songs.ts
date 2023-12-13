import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { runMiddleware } from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    if (req.method === 'POST') {
        let userSongs = await prisma.participant.findMany({
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