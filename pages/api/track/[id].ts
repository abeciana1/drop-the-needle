import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const trackId = Number(req?.query?.id)
    if (req.method === 'PATCH') {
        let track = await prisma?.powerHourSong?.update({
            where: {
                id: trackId
            },
            data: req.body
        })
        res.status(200).json({ track })
    } else if (req.method === 'DELETE') {
        let track = await prisma?.powerHourSong?.findUnique({
            where: {
                id: trackId
            }
        })
        if (track?.hasOwnProperty('orderNumber') && track?.orderNumber > 0) {
            let updatedPowerHour = await prisma.powerHour.update({
                where: {
                    id: Number(track?.powerHourId)
                },
                data: {
                    PowerHourSongs: {
                        updateMany: {
                            where: {
                                orderNumber: {
                                    gt: Number(track?.orderNumber)
                                }
                            },
                            data: {
                                orderNumber: {
                                    decrement: 1
                                }
                            }
                        }
                    }
                },
                select: {
                    PowerHourSongs: true
                }
            })
            await prisma.powerHourSong.delete({
                where: {
                    id: trackId
                }
            })
            res.status(200).json({ updatedPowerHour })
        } else {
            await prisma.powerHourSong.delete({
                where: {
                    id: trackId
                }
            })
        }
    }
}

export default handler