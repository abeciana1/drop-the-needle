import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { runMiddleware } from '@/middleware/corsMiddleware'
import { authMiddleware } from '@/middleware/authMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    if (req.method === 'POST') {
        const participant = await prisma.participant.deleteMany({
            where: {
                powerHourId: req?.body?.powerHourId,
                userId: req?.body?.userId
            }
        })
        res.status(200).json({ participant })
    }
}

export default authMiddleware(handler)