import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { getToken } from "next-auth/jwt"

const secret = process.env.JWT_SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('apiReq', req)
    // const token = await getToken({ req, secret })
    const token = await getToken({ req, secret })
    const { name, email }: any = token
    console.log({name})
    console.log({email})
    console.log("JSON Web Token", token)
    let user = await prisma?.user?.findUnique({
        where: {
            email: email
        },
        include: {
            hosted: true,
            participants: true
        }
    })
    let hostedPowerHours = await prisma?.powerHour?.findMany({
        include: {
            hosts: true
        }
    })
    // let userCreatedPowerHours: any = hostedPowerHours?.hosts?.map((host: any) => host.userId === user?.id)
    // let userCreatedPHS = await prisma?.
    // console.log(user)
    // let hostedPowerHours = await prisma?.host?.findMany({
    //     where: {
    //         powerHourId: {
    //             id: user.id
    //         }
    //     }
    // })
    // console.log({userCreatedPowerHours})
    res.status(200).json({ name: 'John Doe', hostedPowerHours });
}


// let hps = await prisma.powerHour.findUnique({
//     where: {
//         id: hosted[0].powerHourId
//     }
// })
// console.log('hostedPowerHours',hostedPowerHours)
// console.log(hps)