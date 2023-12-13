import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { runMiddleware } from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    if (req.method === 'POST') {
        let userPowerHours = await prisma.user.findMany({
            where: {
                id: Number(req?.body?.userId)
            },
            select: {
                participants: {
                    select: {
                        id: true,
                        powerHour: {
                            select: {
                                id: true,
                                title: true,
                                submissionDeadline: true,
                                songLimit: true
                            }
                        },
                        _count: {
                            select: {
                                PowerHourSongs: true
                            }
                        }
                    }
                }
            }
        })
        res.status(200).json({ userPowerHours })
    }
}

export default handler