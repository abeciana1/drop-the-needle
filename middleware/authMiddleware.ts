import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

const requireAuthentication = () => async (context: NextPageContext) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            }
        };
    }

    return { props: {} };
};

export default requireAuthentication;