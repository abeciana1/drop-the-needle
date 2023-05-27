import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { getToken } from "next-auth/jwt"

const secret = process.env.JWT_SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = await getToken({ req, secret })
    const { email }: any = token
    let user = await prisma?.user?.findUnique({
        where: {
            email: email
        },
        include: {
            hosted: {
                include: {
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
                include: {
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