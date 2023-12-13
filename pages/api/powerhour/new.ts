import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { runMiddleware } from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    if (req.method === 'POST') {
        let newPowerHour = await prisma.powerHour.create({
            data: {
                ...req?.body?.data?.powerHourData,
                hosts: {
                    create: { userId: req?.body?.data?.userId },
                },
                participants: {
                    create: { userId: req?.body?.data?.userId }
                }
            }
        })
        res.status(200).json({ newPowerHour })
    }
}

export default handler