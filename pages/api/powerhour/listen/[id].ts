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
            select: {
                id: true,
                title: true,
                cover_image: true,
                description: true,
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
                },
                PowerHourSongs: {
                    where: {
                        orderNumber: {
                            gt: 0
                        }
                    },
                    select: {
                        id: true,
                        title: true,
                        artist: true,
                        youtubeLink: true,
                        startTime: true,
                        endTime: true,
                        album: true,
                        year: true,
                        participant: {
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
                }
            }
        })
        res.status(200).json({ powerHour })
    }
}

export default handler