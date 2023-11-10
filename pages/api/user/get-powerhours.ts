import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let userPowerHours = await prisma.user.findFirst({
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
                                date_time: true,
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