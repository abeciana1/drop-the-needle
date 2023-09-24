import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const powerHourId = Number(req?.query?.id)
    if (req.method === 'GET') {
        const powerHour = await prisma?.powerHour?.findFirst({
            where: {
                id: powerHourId
            },
            include: {
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
    } else if (req.method === 'PATCH') {
        const powerHour = await prisma?.powerHour?.update({
            where: { id: powerHourId },
            data: req.body
        })
        res.status(200).json({ powerHour })
    }  else if (req.method === 'DELETE') {
        const powerHour = await prisma?.powerHour?.delete({
            where: {
                id: powerHourId
            }
        })
        res.status(200).json({ powerHour })
    }
}

export default handler