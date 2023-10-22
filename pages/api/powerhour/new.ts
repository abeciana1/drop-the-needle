import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let newPowerHour = await prisma.powerHour.create({
            data: {
                ...req?.body?.data?.powerHourData,
                hosts: {
                    create: { userId: req?.body?.data?.userId },
                },
                participants: {
                    create: { userId: req?.body?.data?.userId }
                }
            }
        })
        console.log('newPowerHour', newPowerHour)
        res.status(200).json({ newPowerHour })
    }
}

export default handler