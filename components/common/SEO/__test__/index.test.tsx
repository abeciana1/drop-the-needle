import { render, screen, waitFor } from '@testing-library/react'
import { SEO } from '@/components/common'

jest.mock('next/head', () => {
    return {
        __esModule: true,
        default: ({ children }: { children: Array<React.ReactElement> }) => {
            return <>{children}</>;
        },
    };
});

function getMeta(metaName: string) {
    const metas = document.getElementsByTagName("meta")
    for (let i = 0; i < metas.length; i += 1) {
        if (metas[i].getAttribute("name") === metaName) {
            return metas[i].getAttribute("content")
        }
    }
    return ""
}

test('SEO meta data rendered successfully', async () => {
    render(
        <SEO
            title='Testing'
            description='Testing description'
        />,
        {container: document.head}
    )
    waitFor(() => expect(getMeta("title")).toEqual("Drop The Needle | Testing"))
    waitFor(() => expect(getMeta("description")).toEqual("Testing description"))
})