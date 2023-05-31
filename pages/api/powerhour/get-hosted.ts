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
    let powerHours = await prisma?.host?.findMany({
        where: {
            userId: user?.id
        },
        include: {
            powerHour: true
        }
    })
    res.status(200).json({ powerHours })
}

export default handler