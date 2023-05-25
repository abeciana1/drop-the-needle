import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

// let email = session?.user?.email as string
// let user = await prisma?.user?.findUnique({
//     where: {
//         email: email
//     },
//     include: {
//         hosted: true,
//         participants: true
//     }
// })
// let hps = await prisma.powerHour.findUnique({
//     where: {
//         id: hosted[0].powerHourId
//     }
// })
// let hostedPowerHours = await prisma?.powerHour?.findMany()
// console.log('hostedPowerHours',hostedPowerHours)
// console.log(hps)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: 'John Doe' });
}