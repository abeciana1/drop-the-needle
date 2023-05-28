import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('apiReq', req)
    console.log('apiReq cookie', req?.cookies)
    const session = await getSession({ req });
    console.log('session', session)
    res.setHeader("Set-Cookie", "")
    res.status(200).json({ status: 'User signed out'})
}

// res.setHeader("Set-Cookie", "")