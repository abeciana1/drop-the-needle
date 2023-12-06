import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let powerHours = await prisma?.user?.findMany({
        where: {
            email: req?.body?.params
        },
        select: {
            hosted: {
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