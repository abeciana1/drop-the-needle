import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let userSongs = await prisma.user.findFirst({
            where: {
                id: req?.body?.userId
            },
            select: {
                participants: {
                    where: {
                        powerHourId: req?.body?.phId,
                        userId: req?.body?.userId
                    },
                    select: {
                        PowerHourSongs: {
                            orderBy: {
                                orderNumber: 'asc'
                            }
                        }
                    },
                }
            }
        })
        let songs = userSongs?.participants[0]?.PowerHourSongs
        res.status(200).json({ songs })
    }
}

export default handler