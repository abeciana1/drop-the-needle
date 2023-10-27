import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const powerHourSongs = await prisma?.powerHour?.findFirst({
            where: {
                id: Number(req?.query?.id)
            },
            select: {
                PowerHourSongs: {
                    include: {
                        participant: {
                            select: {
                                user: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: {
                        orderNumber: 'asc'
                    }
                }
            }
        })
        res.status(200).json({ powerHourSongs })
    }
}

export default handler