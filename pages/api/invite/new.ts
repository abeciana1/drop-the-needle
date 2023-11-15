import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let foundPowerHour = await prisma.powerHour.findUnique({
            where: {
                inviteToken: req?.body?.inviteToken
            }
        })
        if (foundPowerHour) {
            if (foundPowerHour.publishStatus) {
                const isAfter = new Date(foundPowerHour?.submissionDeadline).valueOf() - new Date().valueOf() > 0
                if (!isAfter) {
                    let foundInvite = await prisma.invite.findMany({
                        where: {
                            powerHourId: foundPowerHour.id,
                            userId: req?.body?.userId
                        }
                    })
                    let foundParticipant = await prisma.participant.findMany({
                        where: {
                            powerHourId: foundPowerHour.id,
                            userId: req?.body?.userId
                        }
                    })
                    if (!foundInvite[0] && !foundParticipant[0]) {
                        let newInvite = await prisma.invite.create({
                            data: {
                                userId: req?.body?.userId,
                                powerHourId: foundPowerHour.id
                            }
                        })
                        res.status(200).json({ newInvite })
                    } else if (foundParticipant[0]) {
                        res.status(200).json({
                            message: `You are already participating in the ${foundPowerHour.title} event`
                        })
                    } else {
                        res.status(200).json({
                            message: `You already have an invite to the ${foundPowerHour.title} event`
                        })
                    }
                } else {
                    res.status(200).json({
                        message: `Sorry, you can't join the ${foundPowerHour.title} event because the submission deadline has passed.`
                    })
                }
            } else {
                res.status(200).json({
                    message: 'Sorry, the power hour has not been published.'
                })
            }
        }
    }
}

export default handler