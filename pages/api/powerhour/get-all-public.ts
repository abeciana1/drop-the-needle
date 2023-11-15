import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        let publicPowerHours = await prisma.powerHour.findMany({
            where: {
                publishStatus: true
            },
            select: {
                id: true,
                title: true,
                cover_image: true,
                date_time: true
            }
        })
        res.status(200).json({ publicPowerHours })
    }
}

export default handler