import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const powerHour = await prisma?.powerHour?.findFirst({
        where: {
            id: Number(req?.query?.id)
        },
        include: {
            PowerHourSongs: {
                orderBy: {
                    orderNumber: 'asc'
                },
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
            },
            participants: {                
                select: {
                    user: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }
    })
    res.status(200).json({ powerHour })
}

export default handler