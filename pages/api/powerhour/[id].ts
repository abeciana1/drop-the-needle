import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const powerHour = await prisma?.powerHour?.findFirst({
        where: {
            id: Number(req?.query?.id)
        }
    })
    res.status(200).json({ powerHour })
}

export default handler