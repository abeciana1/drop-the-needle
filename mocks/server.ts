import { setupServer } from "msw/node";
import { rest } from 'msw'

export const createServer = (handlerConfig: any) => {
    const handlers = handlerConfig.map((config: any) => {
        if (config.method === 'get') {
            return rest.get(config.path, (req: any, res: any, ctx: any) => {
                return res(
                    ctx.json(
                        config.res(req, res, ctx)
                    )
                )
            })
        } else if (config.method === 'post') {
            return rest.post(config.path, (req: any, res: any, ctx: any) => {
                return res(
                    ctx.json(
                        config.res(req, res, ctx)
                    )
                )
            })
        }
    })
    const server = setupServer(...handlers)
    beforeAll(() => {
        server.listen()
    })
    afterEach(() => {
        server.resetHandlers()
    })
    afterAll(() => {
        server.close()
    })
}
