import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let powerHoursIds = prisma?.powerHour?.findMany({
        select: {
            id: true
        }
    })
    res.status(200).json({ powerHoursIds })
}

export default handler