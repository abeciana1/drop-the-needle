import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let foundParticipant = await prisma.participant.findMany({
            where: {
                userId: req.body.participantId,
                powerHourId: req.body.powerHourId
            },
            select: {
                id: true
            }
        })
        if (foundParticipant[0]) {
            let newTrack = await prisma.powerHourSong.create({
                data: {
                    title: req.body.title,
                    artist: req.body.artist,
                    youtubeLink: req.body.youtubeLink,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                    album: req.body.album,
                    year: req.body.year,
                    orderNumber: req.body.orderNumber,
                    powerHourId: req.body.powerHourId,
                    participantId: foundParticipant[0].id
                }
            })
            res.status(200).json({ newTrack })
        }
    }
}

export default handler