import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let user = await prisma?.user?.findFirst({
        where: {
            email: req?.body?.params
        },
        select: {
            id: true
        }
    })
    let powerHours = await prisma?.participant?.findMany({
        where: {
            userId: user?.id
        },
        include: {
            powerHour: {
                select: {
                    id: true,
                    title: true,
                    cover_image: true
                }
            }
        }
    })
    res.status(200).json({ powerHours })
}

export default handler