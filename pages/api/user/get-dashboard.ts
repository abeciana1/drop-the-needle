import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let user = await prisma?.user?.findFirst({
        where: {
            email: req?.body?.params
        },
        include: {
            hosted: {
                select: {
                    powerHour: {
                        select: {
                            id: true,
                            title: true,
                            cover_image: true
                        }
                    }
                }
            },
            participants: {
                select: {
                    powerHour: {
                        select: {
                            id: true,
                            title: true,
                            cover_image: true
                        }
                    }
                }
            }
        }
    })
    res.status(200).json({ user });
}