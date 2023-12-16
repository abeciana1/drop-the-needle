import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { runMiddleware } from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    if (req.method === 'GET') {
        const powerHour = await prisma?.powerHour?.findUnique({
            where: {
                id: Number(req?.query?.id)
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
                },
                hosts: {
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
            where: { id: Number(req?.query?.id) },
            data: req.body
        })
        res.status(200).json({ powerHour })
    }  else if (req.method === 'DELETE') {
        const powerHour = await prisma?.powerHour?.delete({
            where: {
                id: Number(req?.query?.id)
            }
        })
        res.status(200).json({ powerHour })
    }
}

export default handler