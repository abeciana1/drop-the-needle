import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { runMiddleware } from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    if (req.method === 'PATCH') {
        const invite = await prisma?.invite?.update({
            where: {
                id: Number(req?.query?.id)
            },
            data: req.body
        })
        res.status(200).json({ invite })
    }
}

export default handler