import { setupServer } from "msw/node";
import { rest } from "msw";

export function createServer(handlerConfig) {
  const handlers = handlerConfig.map(({ path, method, res: configRes }) => {
    return rest[method || 'get'](path, (req, res, ctx) => {
      return res(ctx.json(configRes(req, res, ctx)));
    });
  });

  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
}