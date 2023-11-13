import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let user = await prisma?.user?.findUnique({
            where: {
                email: req?.body?.params
            },
            include: {
                hosted: {
                    orderBy: {
                        powerHour: {
                            date_time: 'asc'
                        }
                    },
                    select: {
                        powerHour: {
                            select: {
                                id: true,
                                title: true,
                                cover_image: true,
                                date_time: true
                            }
                        }
                    }
                },
                participants: {
                    orderBy: {
                        powerHour: {
                            date_time: 'asc'
                        }
                    },
                    select: {
                        powerHour: {
                            select: {
                                id: true,
                                title: true,
                                cover_image: true,
                                date_time: true
                            }
                        }
                    }
                },
                invites: {
                    orderBy: {
                        powerHour: {
                            date_time: 'asc'
                        }
                    },
                    include: {
                        powerHour: {
                            select: {
                                id: true,
                                title: true,
                                description: true,
                                cover_image: true,
                                date_time: true,
                                submissionDeadline: true,
                                songLimit: true
                            }
                        }
                    }
                }
            }
        })
        res.status(200).json({ user });
    }
}

export default handler