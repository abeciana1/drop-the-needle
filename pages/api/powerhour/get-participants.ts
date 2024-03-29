import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { runMiddleware } from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    let powerHours = await prisma?.user?.findMany({
        where: {
            email: req?.body?.params
        },
        select: {
            participants: {
                orderBy: {
                    powerHour: {
                        date_time: 'desc'
                    }
                },
                select: {
                    powerHour: {
                        select: {
                            id: true,
                            title: true,
                            cover_image: true,
                            date_time: true
                        }
                    }
                }
            }
        }
    })
    res.status(200).json({ powerHours })
}

export default handler