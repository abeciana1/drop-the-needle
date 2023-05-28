import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { getToken } from "next-auth/jwt"
import * as jsonwebtoken from "jsonwebtoken";
import { getServerSession } from "next-auth/next"
import { options } from "../auth/[...nextauth]"
import { getSession } from "next-auth/react"


const secret = process.env.NEXTAUTH_SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log('req params', req?.body?.params)

    let user = await prisma?.user?.findFirst({
        where: {
            email: req?.body?.params
            // {
            //     equals: 'apptestingab94@gmail.com' //token?.email as string //
            // }
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