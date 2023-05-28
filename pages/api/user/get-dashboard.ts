import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { getToken } from "next-auth/jwt"

const secret = process.env.JWT_SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = await getToken({ req, secret })
    let user = await prisma?.user?.findFirst({
        where: {
            email: token?.email as string
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