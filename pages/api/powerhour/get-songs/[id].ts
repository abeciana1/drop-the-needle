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
                    }
                }
            }
        })
        let sortedSongs = powerHourSongs?.PowerHourSongs.sort((a, b) => a.orderNumber - b.orderNumber)
        res.status(200).json({ sortedSongs })
    }
}

export default handler