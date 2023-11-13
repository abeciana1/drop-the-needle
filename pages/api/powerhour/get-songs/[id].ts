import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const powerHourSongs = await prisma?.powerHour?.findUnique({
            where: {
                id: Number(req?.query?.id)
            },
            select: {
                PowerHourSongs: {
                    where: {
                        orderNumber: {
                            gt: 0
                        }
                    },
                    include: {
                        participant: {
                            select: {
                                user: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: {
                        orderNumber: 'asc'
                    }
                }
            }
        })
        const unsortedSongs = await prisma?.powerHour?.findUnique({
            where: {
                id: Number(req?.query?.id)
            },
            select: {
                PowerHourSongs: {
                    where: {
                        orderNumber: {
                            lt: 1
                        }
                    },
                    include: {
                        participant: {
                            select: {
                                user: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        })
        res.status(200).json({ powerHourSongs, unsortedSongs })
    }
}

export default handler