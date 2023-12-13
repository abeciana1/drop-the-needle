import { GetServerSidePropsContext, NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { getSession } from 'next-auth/react';

const requireAuthentication = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/', // Redirect to the homepage
                permanent: false,
            },
        };
    }

    return {
        authed: true
    }
}

export default requireAuthentication;

type NextApiHandlerWithSession = (
    req: NextApiRequest & { session?: ReturnType<typeof getSession> },
    res: NextApiResponse
) => void | Promise<void>;

export const authMiddleware = (handler: NextApiHandlerWithSession): NextApiHandler => {
    return async (req, res) => {
        const session = await getSession({ req });
        console.log('!!session', session)
        if (!session) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    
        return handler(req, res);
    };
};